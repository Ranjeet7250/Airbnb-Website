const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings })
}
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({ 
        path: "reviews", 
        populate: { 
            path: "author" 
        } 
    }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        res.redirect("/listing");
    }
    console.log(listing)
    return res.render("listings/show.ejs", { listing });
}
module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success", "Successfully created a new listing!");
    return res.redirect("/listing");
};
module.exports.renderEditform = async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listing");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/h_300,w_250");
    return res.render("listings/edit.ejs", {listing, originalImageUrl});
}
module.exports.updateListing = async(req,res)=>{
    let {id} = req.params;
    let listing =  await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image= {url, filename};
        await listing.save();
    }

    req.flash("success", "Successfully updated the listing!");
    return res.redirect(`/listing/${id}`);
}
module.exports.destroyListing = async (req, res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    return res.redirect("/listing");
};