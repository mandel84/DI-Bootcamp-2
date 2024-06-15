# def display_board(board):
#     print("* TIC TAC TOE *")
#     print("****************")
#     for row in range(3):
#         print(f"*  {board[row * 3]} | {board[row * 3 +1]} | {board[row * 3 +2]}  *")
#         if row < 2:
#             print("* ---+---+--- *")
#     print("****************")

# def player_input(player):
#       while True:
#         try:
#             row = int(input(f"Player {player}'s turn...\nEnter row (1-3): ")) - 1
#             col = int(input("Enter column (1-3): ")) - 1
#             if row in range(3) and col in range(3):
#                 return row * 3 + col
#             else:
#                 print("Invalid input. Please enter numbers between 1 and 3.")
#         except ValueError:
#             print("Invalid input. Please enter numbers between 1 and 3.")  


# def check_win(board):    
#     win_conditions = [(0,  1, 2), (3, 4, 5), (6, 7, 8),  
#                       (0, 3, 6), (1, 4, 7), (2, 5, 8),  
#                       (0, 4, 8), (2, 4, 6)]     

#     for condition in win_conditions:
#         if board[condition[0]] == board[condition[1]] == board[condition[2]] and board[condition[0]] != ' ':
#             return board[condition[0]]
#     return None           

# def play():
#     board = [' ' for _ in range(9)]
#     current_player = 'X'

#     for turn in range(9):
#         display_board(board)
#         position = player_input(current_player)

#         while board[position] != ' ':
#             print("The position is already taken. Choose another position.")
#             position = player_input(current_player)

#         board[position] = current_player

#         winner = check_win(board)
#         if winner:
#             display_board(board)
#             print(f"Player {winner} wins!")
#             return

#         current_player = 'O' if current_player == 'X' else 'X'

#     display_board(board)
#     print("It's a tie!")

# play()
