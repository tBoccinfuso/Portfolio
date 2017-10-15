namespace LotoNumbers
{
    partial class FrmLotto
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FrmLotto));
            this.picLotto = new System.Windows.Forms.PictureBox();
            this.grpPlayer = new System.Windows.Forms.GroupBox();
            this.lblPlayerNumber = new System.Windows.Forms.Label();
            this.btnPlayer = new System.Windows.Forms.Button();
            this.grpComputer = new System.Windows.Forms.GroupBox();
            this.lblComputerNumber = new System.Windows.Forms.Label();
            this.btnComputer = new System.Windows.Forms.Button();
            this.grpMatching = new System.Windows.Forms.GroupBox();
            this.lblMatching = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.picLotto)).BeginInit();
            this.grpPlayer.SuspendLayout();
            this.grpComputer.SuspendLayout();
            this.grpMatching.SuspendLayout();
            this.SuspendLayout();
            // 
            // picLotto
            // 
            this.picLotto.Image = ((System.Drawing.Image)(resources.GetObject("picLotto.Image")));
            this.picLotto.Location = new System.Drawing.Point(0, 0);
            this.picLotto.Name = "picLotto";
            this.picLotto.Size = new System.Drawing.Size(283, 254);
            this.picLotto.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picLotto.TabIndex = 0;
            this.picLotto.TabStop = false;
            // 
            // grpPlayer
            // 
            this.grpPlayer.Controls.Add(this.lblPlayerNumber);
            this.grpPlayer.Controls.Add(this.btnPlayer);
            this.grpPlayer.Location = new System.Drawing.Point(293, 8);
            this.grpPlayer.Name = "grpPlayer";
            this.grpPlayer.Size = new System.Drawing.Size(183, 87);
            this.grpPlayer.TabIndex = 0;
            this.grpPlayer.TabStop = false;
            this.grpPlayer.Text = "Your Numbers";
            // 
            // lblPlayerNumber
            // 
            this.lblPlayerNumber.Location = new System.Drawing.Point(12, 23);
            this.lblPlayerNumber.Name = "lblPlayerNumber";
            this.lblPlayerNumber.Size = new System.Drawing.Size(159, 20);
            this.lblPlayerNumber.TabIndex = 1;
            this.lblPlayerNumber.Text = "00  00  00  00  00  00  00";
            this.lblPlayerNumber.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // btnPlayer
            // 
            this.btnPlayer.FlatAppearance.BorderColor = System.Drawing.Color.White;
            this.btnPlayer.Location = new System.Drawing.Point(35, 53);
            this.btnPlayer.Name = "btnPlayer";
            this.btnPlayer.Size = new System.Drawing.Size(114, 28);
            this.btnPlayer.TabIndex = 0;
            this.btnPlayer.Text = "Generate";
            this.btnPlayer.UseVisualStyleBackColor = true;
            this.btnPlayer.Click += new System.EventHandler(this.btnPlayer_Click);
            // 
            // grpComputer
            // 
            this.grpComputer.Controls.Add(this.lblComputerNumber);
            this.grpComputer.Controls.Add(this.btnComputer);
            this.grpComputer.Location = new System.Drawing.Point(293, 105);
            this.grpComputer.Name = "grpComputer";
            this.grpComputer.Size = new System.Drawing.Size(183, 87);
            this.grpComputer.TabIndex = 1;
            this.grpComputer.TabStop = false;
            this.grpComputer.Text = "Winning Numbers";
            // 
            // lblComputerNumber
            // 
            this.lblComputerNumber.Location = new System.Drawing.Point(12, 24);
            this.lblComputerNumber.Name = "lblComputerNumber";
            this.lblComputerNumber.Size = new System.Drawing.Size(159, 20);
            this.lblComputerNumber.TabIndex = 2;
            this.lblComputerNumber.Text = "00  00  00  00  00  00";
            this.lblComputerNumber.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // btnComputer
            // 
            this.btnComputer.Location = new System.Drawing.Point(35, 53);
            this.btnComputer.Name = "btnComputer";
            this.btnComputer.Size = new System.Drawing.Size(114, 28);
            this.btnComputer.TabIndex = 0;
            this.btnComputer.Text = "Let\'s Play";
            this.btnComputer.UseVisualStyleBackColor = true;
            this.btnComputer.Click += new System.EventHandler(this.btnComputer_Click);
            // 
            // grpMatching
            // 
            this.grpMatching.Controls.Add(this.lblMatching);
            this.grpMatching.Location = new System.Drawing.Point(293, 200);
            this.grpMatching.Name = "grpMatching";
            this.grpMatching.Size = new System.Drawing.Size(183, 45);
            this.grpMatching.TabIndex = 2;
            this.grpMatching.TabStop = false;
            this.grpMatching.Text = "Matching Numbers";
            // 
            // lblMatching
            // 
            this.lblMatching.Location = new System.Drawing.Point(82, 20);
            this.lblMatching.Name = "lblMatching";
            this.lblMatching.Size = new System.Drawing.Size(19, 13);
            this.lblMatching.TabIndex = 3;
            this.lblMatching.Text = "00";
            // 
            // Lotto
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(484, 254);
            this.Controls.Add(this.grpMatching);
            this.Controls.Add(this.grpComputer);
            this.Controls.Add(this.grpPlayer);
            this.Controls.Add(this.picLotto);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "Lotto";
            this.Text = "Lotto Number Picker";
            ((System.ComponentModel.ISupportInitialize)(this.picLotto)).EndInit();
            this.grpPlayer.ResumeLayout(false);
            this.grpComputer.ResumeLayout(false);
            this.grpMatching.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.PictureBox picLotto;
        private System.Windows.Forms.GroupBox grpPlayer;
        private System.Windows.Forms.Button btnPlayer;
        private System.Windows.Forms.GroupBox grpComputer;
        private System.Windows.Forms.Button btnComputer;
        private System.Windows.Forms.GroupBox grpMatching;
        private System.Windows.Forms.Label lblMatching;
        private System.Windows.Forms.Label lblPlayerNumber;
        private System.Windows.Forms.Label lblComputerNumber;
    }
}

