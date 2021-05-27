Feature: Perform multiplication


  Scenario Outline: Multiply two numbers
    Given a variable set to <num1>
    When I multiply the variable by <num2>
    Then the variable should contain <result>

    Examples:
      | num1|   num2    | result |
      | 100 |         5 |    500 |
      |  10 |         9 |    90  |
      |  5  |         5 |     25 |