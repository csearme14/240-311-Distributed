//คำนวณเกรดเฉลี่ย
let score = 57;
    if ((score<=100)&&(score>=80))
        {
            console.log( "Grade A");
        }
    else if((score<=79)&&(score>=75))
        {
            console.log("Grade B+");
        }
    else if((score<=74)&&(score>=70))
        {
            console.log("Grade B");
        }
    else if((score<=69)&&(score>=65))
        {
            console.log("Grade C+");
        }
    else if((score<=64)&&(score>=60))
        {
            console.log("Grade C");
        }
    else if((score<=59)&&(score>=55))
        {
            console.log("Grade D+");
        }
    else if((score<=54)&&(score>=50))
        {
            console.log("Grade D");
        }
    else{
            console.log( "Grade E");
        }