$(document).ready(function() {
    // Initial cost calculation based on default slider value
    calculateCost();

    // Slider input change event
    $('.slider').on('input', function() {
        var value = parseInt($(this).val());
        // Adjust value to nearest allowed quantity
        if (value <= 50) {
            $(this).val(50);
        } else if (value <= 100) {
            $(this).val(100);
        } else if (value <= 150) {
            $(this).val(150);
        } else if (value <= 200) {
            $(this).val(200);
        } else if (value <= 250) {
            $(this).val(250);
        } else if (value <= 500) {
            $(this).val(500);
        } else if (value <= 1000) {
            $(this).val(1000);
        }
        calculateCost();
    });

    // Function to calculate estimated cost
    function calculateCost() {
        var quantity = parseInt($('#quantity').val());
        var cost = getCost(quantity);
        $('#quantity-value').text(quantity);
        $('#estimated-cost').text('$' + cost.toFixed(2));
    }

    // Function to determine cost based on quantity
    function getCost(quantity) {
    if (quantity >= 50 && quantity < 100) {
        return 30.99; // Increased from 20.00 to 30.99
    } else if (quantity >= 100 && quantity < 150) {
        return 35.99; // Increased from 25.00 to 35.99
    } else if (quantity >= 150 && quantity < 200) {
        return 40.99; // Increased from 30.00 to 40.99
    } else if (quantity >= 200 && quantity < 250) {
        return 45.99; // Increased from 35.00 to 45.99
    } else if (quantity >= 250 && quantity < 500) {
        return 50.99; // Increased from 40.00 to 50.99
    } else if (quantity >= 500 && quantity < 1000) {
        return 60.99; // Increased from 50.00 to 60.99
    } else if (quantity >= 1000) {
        return 110.99; // Increased from 100.00 to 110.99
    }
    return 0; // Default case, though it won't happen since min value is set to 50
}
});
