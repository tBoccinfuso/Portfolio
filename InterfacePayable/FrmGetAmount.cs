using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
// Polymorphism using an Interface
namespace InterfacePayable
{
    public partial class FrmGetAmount : Form
    {
        public FrmGetAmount()
        {
            InitializeComponent();
        }

        // a List<> of objects that implement IPayable interface
        List<IPayable> pay = new List<IPayable>();

        private void FrmGetAmount_Load(object sender, EventArgs e)
        {
            // add objects that implement IPayable interface to List<>
            pay.Add(new Invoice(2, 23.45m, "Hole Punch"));
            pay.Add(new Employee("John Doe", 35, 23.25m));
            pay.Add(new Employee("Jack Smith", 40, 19.5m));
            pay.Add(new Invoice(4, 4.75m, "Scissors"));
            pay.Add(new Invoice(3, 12.99m, "Black Pens - 20pk"));
        }

        private void btnList_Click(object sender, EventArgs e)
        {
            // display values in List<> by access the 2 common members
            // ToString() and GetPaymentAmount() - Polymorphic Methods!
            // using for loop
            string display = "";
            for (int index = 0; index < pay.Count; index++)
            {
                display += pay[index].ToString() + "\nAmount Payable: " +
                           pay[index].GetPaymentAmount().ToString("C2") + "\n\n";
            }
            MessageBox.Show(display, "List");
        }

        private void btnTotal_Click(object sender, EventArgs e)
        {
            // loop through List<> - keep running total of amount payable
            // using foreach loop
            decimal total = 0;
            foreach (IPayable wePay in pay)
            {
                total += wePay.GetPaymentAmount();
            }
            MessageBox.Show(total.ToString("C2"), "Total Payable");
        }
    }
}
