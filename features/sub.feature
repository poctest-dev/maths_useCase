Feature: Perform subtraction


  Scenario Outline: decrement the variable
    Given a variable set to <var>
    When I decrement the variable by <decrement>
    Then the variable should contain <result>

    Examples:
      | var | decrement | result |
      | 100 |         5 |    95  |
      |  99 |         9 |    90  |
      |  12 |         5 |     7  |