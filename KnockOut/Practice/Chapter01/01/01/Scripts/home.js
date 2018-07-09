// Test the jquery works
console.log("Hello World");

// Step0: make sure that you invoke the method in an intial function
// add data binder step1
$(function () {
    var viewModel = {
        firstName: ko.observable("Kian"),
        lastName: ko.observable("Rad"),
        //emailAdderss: ko.computed(function() {
        //    return (this.firstName() + " - > ");
        //    })
            
    };
    viewModel.emailAdderss = ko.computed(function() {
        return (this.firstName().toString().toLowerCase() + "." + this.lastName().toLowerCase()+"@enlivenfinancial.com");
    }, viewModel);
    ko.applyBindings(viewModel);
    $("#test").click(function () {
        console.log(viewModel.firstName());
        viewModel.firstName("Omid");
        console.log(viewModel.firstName());
        console.log(viewModel.emailAdderss());
    });
});

