#include <iostream>
using namespace std;

#include <iostream>
using namespace std;

 char board[3][3]={{'1','2','3'},{'4','5','6'},{'7','8','9'}};
 char turn ='X';

void display_board() {
   cout<< "\n\n     TICK CROSS GAME    "<< endl;
    cout<<"\tPLayer1 [x] \n\tPlayer2 [0]\n\n";
    cout<<"\t\t     |     |     \n";
    cout<<"\t\t "<<board[0][0]<<"   |  "<<board[0][1]<<"  |   "<<board[0][2]<<"  \n";
    cout<<"\t\t_____|_____|_____\n" ;    
    cout<<"\t\t     |     |     \n";
    cout<<"\t\t "<<board[1][0]<<"   |  "<<board[1][1]<<"  |   "<<board[1][2]<<"  \n";
    cout<<"\t\t_____|_____|_____\n";
    cout<<"\t\t     |     |     \n";
    cout<<"\t\t "<<board[2][0]<<"   |  "<<board[2][1]<<"  |   "<<board[2][2]<<"   \n";
    cout<<"\t\t     |     |     \n";
}


void player_turn(){
   int choice;
   int row, column;
   
   if(turn=='X')
   cout << " \n\tPlayers1 [X] turn:";
   
   if(turn=='O')
   cout << " \n\tPlayers2 [O] turn:";
   cin >> choice;

   
   switch(choice) {
     
     case 1: row=0; column=0; break;
     case 2: row=0; column=1; break;
     case 3: row=0; column=2; break;
     case 4: row=1; column=0; break;
     case 5: row=1; column=1; break;
     case 6: row=1; column=2; break;
     case 7: row=3; column=0; break;
     case 8: row=3; column=2; break;
     case 9: row=3; column=3; break;
     
     default:
     cout<<"Invalid choice\n";
     break;
   }
    /* case 1:
     board[0][0]='X';
     break;
     case 2:
     board[0][1]='X';
     break;
     case 3:
     board[0][2]='X';
     break;
     
     default:
     cout<<"Invalid Choice"<<endl;
     break;*/

if (turn =='X') {
  board[row][column]='X';
  turn='O';
  
} else if (turn == 'O'){
   
  board[row][column]='O';
  turn='X';
  
}
}

int main() 

{
 
 
  while(true) {
  
   display_board();
  player_turn();
  display_board();
}



  // cout << " \n\tPlayers1 [X] turn:";
   //cin >> choice;



}













