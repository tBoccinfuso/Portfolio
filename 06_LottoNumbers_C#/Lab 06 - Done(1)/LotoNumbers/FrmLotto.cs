
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace LotoNumbers
{
    public partial class FrmLotto : Form
    {
        // declare class level variables
        List<int> player = new List<int>(7);
        List<int> computer = new List<int>(6);

        public FrmLotto()
        {
            InitializeComponent();
        }

        // event method to generate player's numbers
        private void btnPlayer_Click(object sender, EventArgs e)
        {
            // declare and initalize local variables
            string display = "";

            // reset the winning number label before generating the player's numbers
            lblComputerNumber.Text = "00  00  00  00  00  00";

            // clear list before adding new values
            player.Clear();

            // generate unique random numbers
            GenerateRandomNumbers(player);

            // sort the list in ascending order
            player.Sort();

            // build display string
            display = BuildDisplayString(player);

            // display winning number in label
            lblPlayerNumber.Text = display;
        }

        // method to generate computer's random numbers (the 'winning numbers')
        // and determine how many winning numbers
        private void btnComputer_Click(object sender, EventArgs e)
        {
            // declare and initalize local variables
            int winCount = 0;
            string display = "";

            // clear list before adding new values
            computer.Clear();
            
            // generate unique random numbers
            GenerateRandomNumbers(computer);

            // sort the list in ascending order
            computer.Sort();

            // build display string
            display = BuildDisplayString(computer);

            // display winning number in label
            lblComputerNumber.Text = display;

            // determine if this number matches any of the players numbers
            winCount = CompareTwoLists(player, computer);
            
            // display the total winning numbers
            lblMatching.Text = winCount.ToString("D2");
        }

        private void GenerateRandomNumbers(List<int> numberList)
        {
            // declare method variables
            int count = 0;
            int luckyNumber = 0;
            Random lucky = new Random();

            // generate unique random numbers
            while (count < numberList.Capacity)
            {
                // generate a random number
                luckyNumber = lucky.Next(1, 50);

                // determine if this number has been picked previously
                if(!numberList.Contains(luckyNumber)) // no match was found
                {
                    numberList.Add(luckyNumber);
                    count++;
                }
            }
        }

        private string BuildDisplayString(List<int> numberList)
        {
            // declare method variable
            string display = "  ";

            // loop through the list and build a display string
            foreach (int number in numberList)
                display += number.ToString("D2") + "  ";

            // return display string
            return display;
        }

        private int CompareTwoLists(List<int> list1, List<int> list2)
        {
            // declare method variable
            int numberMatching = 0;

            // loop through each element in the first list looking for a match in the second list
            foreach (int value in list1)
            {
                if (list2.Contains(value))
                    numberMatching++;  // a matching value is found
            }

            return numberMatching;
        }
    }
}