$(document).ready(function() { // ****CURRENTLY ONLY MADE FOR USER 2****

// =============
// EXPENSES FORM
// =============

  var user = 2;

  // ***GETTING EXPENSES FROM DATABASE TO FRONT END***
  function createExpenseRow(newExpense) { // Template that our database follows to display it's data in the table.
    var newTr = $("<tr>");
    newTr.data("expense", newExpense);
    newTr.append(`<td> ${newExpense.name} </td>`);
    newTr.append(`<td> ${newExpense.category} </td>`);
    newTr.append(`<td> ${newExpense.due_date} </td>`);
    newTr.append(`<td class="text-right"> ${newExpense.amount_due} </td>`);
    newTr.append(`<td><button class="editbtn"><span class="fa fa-cog" aria-hidden="true"></span></button></td>`);
    newTr.append(`<td><button class="delbtn"><span class="fa fa-times-circle" aria-hidden="true"></span></button></td>`);
    return newTr;
  };
  function renderExpenseData(rows) { // Renders the rows inside of the array to the table.
    var expTable = $("#exp-tbody");
    expTable.children().not(":last").remove();
    if (rows.length) {
      console.log(rows);
      expTable.prepend(rows);
    };
  };
  function getExpenses() { // Retrieves our data from the database and pushes it to an array.
    $.get("/api/expenses/" + user, function(data) { // CHANGE '2' TO THE CURRENT USER THAT IS LOGGED IN
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createExpenseRow(data[i]));
      };
      renderExpenseData(rowsToAdd);
    });
  };
  getExpenses(); // Runs the above functions to get all the table data from expenses and display it per user.

  // ***POSTING EXPENSES TO DATABASE FROM FRONT END***
  $("#exp-button").on("click", function() {
    event.preventDefault();
    handleExpenseFormSubmit();
  });
  function handleExpenseFormSubmit() {
    var expName = $("#modal_Expenses #exp-name").val().trim(),
    expAmount = $("#modal_Expenses #exp-amount").val().trim(),
    expCat = $("#modal_Expenses #exp-category").val().trim(),
    expDue = $("#modal_Expenses #exp-due").val().trim();

    var expData = {
      name: expName,
      category: expCat,
      amount_due: expAmount,
      due_date: expDue,
      UserId: 2
    };
    $("#modal_Expenses #exp-name").val("");
    $("#modal_Expenses #exp-amount").val("");
    $("#modal_Expenses #exp-category").val("");
    $("#modal_Expenses #exp-due").val("");

    console.log(expData);
    upsertExpense(expData);
  };
  function upsertExpense(expenseData) {
    $.post("/api/expenses", expenseData)
    .then(getExpenses);
  };

  // ***UPDATING EXPENSES ON FRONT END AND DATABASE***
  $(document).on("click", ".editbtn", function() {
    console.log($(this).parent("td").parent("tr").data("expense"));
  });

  // ***DELETING EXPENSES ON FRONT END AND DATABASE***
  $(document).on("click", ".delbtn", function() {
    console.log($(this).parent("td").parent("tr").data("expense"));
    var expenseToDel = $(this).parent("td").parent("tr").data("expense");
    $.ajax({
      method: "DELETE",
      url: "/api/expenses/" + user + "/" + expenseToDel.id
    })
    .done(getExpenses);
  });

// ========
// CATEGORY
// ========
  // GETTING CATAGORIES FROM DATABASE TO FRONT END
  function createCategoryOption(optionInfo) {
    var newOption = $(`<option> ${optionInfo.category} </option>`);
    return newOption;
  };
  function renderCategoryOptions(options) {
    var categorySelect = $("#exp-category");
    // categorySelect.children().not(":last").remove();
    if (options.length) {
      categorySelect.prepend(options);
    };
  };
  function getCategories() {
    $.get("/api/expenses/" + user, function(data) { // CHANGE '2' TO THE CURRENT USER THAT IS LOGGED IN
      var categoryArray = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].UserId === 2) { // CHANGE '2' TO THE CURRENT USER THAT IS LOGGED IN
          console.log(data[i]);
          if (categoryArray.indexOf(createCategoryOption(data[i])) < 0) { // DUPLICATE IS BUGGED
            categoryArray.push(createCategoryOption(data[i]));
            console.log(categoryArray);
          };
        };
      };
      renderCategoryOptions(categoryArray);
    });
  };
  getCategories();

  // ADD TEMPORARY CATEGORY
  $("#exp-category").change(function() { // CHECKING FOR ADD CATEGORY OPTION
    if ($("#exp-category option:selected")[0].text === "+ Add a Category") {
      $("#categoryFormGroup").append('<input id="exp-catInput" name="exp-catInput" type="text" class="form-control exp-catInput valid" data-val-required="Please enter the name on card" autocomplete="exp-catInput" aria-required="true" aria-invalid="false" aria-describedby="exp-catInput-error" placeholder="Please type the Category here">');
      $("#categoryFormGroup").append('<button id="exp-catInputSubmit" type="submit" class="btn btn-lg btn-info btn-block"> Add Category </button>');
    } else {
      $("#exp-catInput").remove();
      $("#exp-catInputSubmit").remove();
    };
  });
  $(document).on("click", "#exp-catInputSubmit", function() {
    event.preventDefault();
    if (!$("#exp-catInput").val()) { return alert("Your category name is empty.") };
    alert("A new category has been created!")
    $("#exp-category").prepend($(`<option> ${$("#exp-catInput").val().trim()} </option>`))
  });
});