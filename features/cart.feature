@cart
Feature: Shopping cart
  Scenario: Add a product to the cart from search results
    Given I am on the OpenCart home page
    When I search for "MacBook"
    And I add the "MacBook" product to the cart
    Then the cart notification should confirm the product was added
