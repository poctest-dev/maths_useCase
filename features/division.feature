Feature: Perform division


  Scenario Outline: Divide two numbers
    Given a variable set to <num1>
    When I divide the variable by <num2>
    Then the variable should contain <result>

    Examples:
      | num1|  num2     | result |
      | 100 |         5 |    20  |
      |  99 |         9 |    11  |
      |  6  |         2 |     3  |