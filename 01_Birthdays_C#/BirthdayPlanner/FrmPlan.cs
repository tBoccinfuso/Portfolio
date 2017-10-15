using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
//Thomas Boccinfuso - Test #2.
namespace BirthdayPlanner
{
    public partial class FrmPlan : Form
    {
        public FrmPlan()
        {
            InitializeComponent();
        }

        List<Birthday> BirthdayPlanner = new List<Birthday>();

        public struct Birthday
        {

            public string name;
            public DateTime date;
               
            public string Name
            {
                get
                {
                    return name;
                }
                set
                {
                    name = value;
                }
            }
        public DateTime Date
            {
                get { return date; }
                set
                {
                    date = value;
                }
            }
        }//struct

        private void btnBirthday_Click(object sender, EventArgs e)
        {
            try
            {
                Birthday newBday = new Birthday();
                newBday.name = txtName.Text;
                newBday.date = Convert.ToDateTime(txtBirthday.Text);

                BirthdayPlanner.Add(newBday);
                txtBirthday.Clear();
                txtName.Clear();
                txtName.Focus();
            }
            catch (Exception)
            {
                MessageBox.Show("Birthday Information is Invalid.", "Error");
                txtBirthday.Focus();
            }
        }

        private void btnBirthdays2_Click(object sender, EventArgs e)
        {
             string display = "";
            foreach (Birthday info in BirthdayPlanner)
            {
                display += "Birthdays on record... \n\n" + "Name: " + info.name + "\n" + "Birthdate: " + info.date.ToLongDateString();

            }
            MessageBox.Show(display);
        }

        private void btnListNames2_Click(object sender, EventArgs e)
        {
            string display = "";
            foreach(Birthday info in BirthdayPlanner)
            {
                display +=   info.name;

            }
            MessageBox.Show("Names on record... \n\n" + display);
        }
    }// class
}//namespace

