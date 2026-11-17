@smoke @search
Feature: Product search
  As a customer
  I want to search for products
  So that I can find relevant items

  Scenario: Search for an existing product
    Given I am on the OpenCart home page
    When I search for "MacBook"
    Then the search results should include "MacBook"

  Scenario Outline: Search for a product keyword
    Given I am on the OpenCart home page
    When I search for "<keyword>"
    Then the search results should include "<expected>"

    Examples:
      | keyword | expected |
      | iPhone  | iPhone   |
