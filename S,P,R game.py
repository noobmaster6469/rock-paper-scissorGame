# Bijesh Neupane Rock, Paper and Scissor game in python
import random

gameArr = ["Rock","Paper","Scissor"]
i = 1

while(i != 0):
    computerChoice = int(random.random()*3)
    userChoice = int(input("Choose:\n0 for Rock\n1 for Paper\n2 for Scissor\nChoice = "))

    if(userChoice == computerChoice):
        print("Computer also chose: " , gameArr[computerChoice] ,"\nDRAW!!")
    elif(userChoice == (computerChoice + 2) % 3):
        print("Computer chose: " , gameArr[computerChoice] ,"\nLOOSE!!")
    elif(userChoice != (computerChoice + 2) % 3):
        print("Computer chose: " , gameArr[computerChoice] ,"\nWin!!")
    i = int(input("Press 0 if you want to quit else press 1 to keep playing: "))
