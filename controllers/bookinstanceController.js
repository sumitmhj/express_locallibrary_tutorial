const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstance
exports.bookinstanc_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance list");
});

// Display detail page for a specific BookInstance.
exports.bookinstanc_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create GET");
});

// Display BookInstance create on POST.
exports.bookinstance_create_POST = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
});

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
  });
  
  // Handle BookInstance delete on POST.
  exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
  });
  
  // Display BookInstance update form on GET.
  exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
  });
  
  // Handle bookinstance update on POST.
  exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
  });