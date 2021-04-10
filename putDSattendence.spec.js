const { Builder, By, Key, until } = require("selenium-webdriver");
// const assert = require("assert");

let mBool = new Map();
let xPath = new Map();
xPath.set(
    "2K19/CO/001 AADHEESH SHARMA",
    "//form[@id='attendance_form']/div/div/div[2]/button"
);
mBool.set("2K19/CO/001 AADHEESH SHARMA", false);

xPath.set(
    "2K19/CO/002 AADI RAWAT",
    "//form[@id='attendance_form']/div[2]/div/div[2]/button"
);
mBool.set("2K19/CO/002 AADI RAWAT", false);
xPath.set(
    "2K19/CO/003 AADITYA NARAYAN SUBEDY",
    "//form[@id='attendance_form']/div[3]/div/div[2]/button"
);
mBool.set("2K19/CO/003 AADITYA NARAYAN SUBEDY", false);
xPath.set(
    "2K19-CO-004 AAKASH SHARMA",
    "//form[@id='attendance_form']/div[4]/div/div[2]/button"
);
mBool.set("2K19-CO-004 AAKASH SHARMA", false);
xPath.set(
    "2K19/CO/005 AANCHAL SAHU",
    "//form[@id='attendance_form']/div[5]/div/div[2]/button"
);
mBool.set("2K19/CO/005 AANCHAL SAHU", false);
xPath.set(
    "2K19/CO/006 AARADHYA BERI",
    "//form[@id='attendance_form']/div[6]/div/div[2]/button"
);
mBool.set("2K19/CO/006 AARADHYA BERI", false);
xPath.set(
    "2K19/CO/007 AARAMBH KESHRI",
    "//form[@id='attendance_form']/div[7]/div/div[2]/button"
);
mBool.set("2K19/CO/007 AARAMBH KESHRI", false);
xPath.set(
    "2K19/CO/008 AASHISH BHANDARI",
    "//form[@id='attendance_form']/div[8]/div/div[2]/button"
);
mBool.set("2K19/CO/008 AASHISH BHANDARI", false);
xPath.set(
    "2K19/CO/009 AAYUSH",
    "//form[@id='attendance_form']/div[9]/div/div[2]/button"
);
mBool.set("2K19/CO/009 AAYUSH", false);
xPath.set(
    "2K19/CO/010 AAYUSH KUMAR",
    "//form[@id='attendance_form']/div[10]/div/div[2]/button"
);
mBool.set("2K19/CO/010 AAYUSH KUMAR", false);
xPath.set(
    "2K19/CO/011 AAYUSH NEVATIA",
    "//form[@id='attendance_form']/div[11]/div/div[2]/button"
);
mBool.set("2K19/CO/011 AAYUSH NEVATIA", false);
xPath.set(
    "2K19/CO/012 ABHAY GARG",
    "//form[@id='attendance_form']/div[12]/div/div[2]/button"
);
mBool.set("2K19/CO/012 ABHAY GARG", false);
xPath.set(
    "2K19/CO/013 ABHAY GUPTA",
    "//form[@id='attendance_form']/div[13]/div/div[2]/button"
);
mBool.set("2K19/CO/013 ABHAY GUPTA", false);
xPath.set(
    "2K19/CO/014 ABHILASHA BANSAL",
    "//form[@id='attendance_form']/div[14]/div/div[2]/button"
);
mBool.set("2K19/CO/014 ABHILASHA BANSAL", false);
xPath.set(
    "2K19/CO/015 ABHINAV LOHIA",
    "//form[@id='attendance_form']/div[15]/div/div[2]/button"
);
mBool.set("2K19/CO/015 ABHINAV LOHIA", false);
xPath.set(
    "2K19/CO/016 ABHINAV RANJITH",
    "//form[@id='attendance_form']/div[16]/div/div[2]/button"
);
mBool.set("2K19/CO/016 ABHINAV RANJITH", false);
xPath.set(
    "2K19/CO/017 ABHINAV SACHDEVA",
    "//form[@id='attendance_form']/div[17]/div/div[2]/button"
);
mBool.set("2K19/CO/017 ABHINAV SACHDEVA", false);
xPath.set(
    "2K19/CO/018 ABHISHEK",
    "//form[@id='attendance_form']/div[18]/div/div[2]/button"
);
mBool.set("2K19/CO/018 ABHISHEK", false);
xPath.set(
    "2K19/CO/019 ABHISHEK JHA",
    "//form[@id='attendance_form']/div[19]/div/div[2]/button"
);
mBool.set("2K19/CO/019 ABHISHEK JHA", false);
xPath.set(
    "2K19/CO/020 ABHISHEK KUMAR",
    "//form[@id='attendance_form']/div[20]/div/div[2]/button"
);
mBool.set("2K19/CO/020 ABHISHEK KUMAR", false);
xPath.set(
    "2K19/CO/021 ABHISHEK KUMAR SINGH",
    "//form[@id='attendance_form']/div[21]/div/div[2]/button"
);
mBool.set("2K19/CO/021 ABHISHEK KUMAR SINGH", false);
xPath.set(
    "2K19/CO/022 ABHISHEK MEENA",
    "//form[@id='attendance_form']/div[22]/div/div[2]/button"
);
mBool.set("2K19/CO/022 ABHISHEK MEENA", false);
xPath.set(
    "2K19/CO/023 ABHISHEK SHARMA",
    "//form[@id='attendance_form']/div[23]/div/div[2]/button"
);
mBool.set("2K19/CO/023 ABHISHEK SHARMA", false);
xPath.set(
    "2K19/CO/024 ABHISHEK SINGH",
    "//form[@id='attendance_form']/div[24]/div/div[2]/button"
);
mBool.set("2K19/CO/024 ABHISHEK SINGH", false);
xPath.set(
    "2K19/CO/025 ABHISHEK SOREN",
    "//form[@id='attendance_form']/div[25]/div/div[2]/button"
);
mBool.set("2K19/CO/025 ABHISHEK SOREN", false);
xPath.set(
    "2K19/CO/026 ABHISHEK TYAGI",
    "//form[@id='attendance_form']/div[26]/div/div[2]/button"
);
mBool.set("2K19/CO/026 ABHISHEK TYAGI", false);
xPath.set(
    "2K19/CO/027 ABHISHEK VERMA",
    "//form[@id='attendance_form']/div[27]/div/div[2]/button"
);
mBool.set("2K19/CO/027 ABHISHEK VERMA", false);
xPath.set(
    "2K19/CO/029 ADEESH GUPTA",
    "//form[@id='attendance_form']/div[28]/div/div[2]/button"
);
mBool.set("2K19/CO/029 ADEESH GUPTA", false);
xPath.set(
    "2K19/CO/030 ADITYA CHAUHAN",
    "//form[@id='attendance_form']/div[29]/div/div[2]/button"
);
mBool.set("2K19/CO/030 ADITYA CHAUHAN", false);
xPath.set(
    "2K19/CO/031 ADITYA KUMAR SINGH",
    "//form[@id='attendance_form']/div[30]/div/div[2]/button"
);
mBool.set("2K19/CO/031 ADITYA KUMAR SINGH", false);
xPath.set(
    "2K19/CO/032 ADITYA RAJ",
    "//form[@id='attendance_form']/div[31]/div/div[2]/button"
);
mBool.set("2K19/CO/032 ADITYA RAJ", false);
xPath.set(
    "2K19/CO/033 ADITYA THAKUR",
    "//form[@id='attendance_form']/div[32]/div/div[2]/button"
);
mBool.set("2K19/CO/033 ADITYA THAKUR", false);
xPath.set(
    "2K19/CO/034 AESHITA MATHUR",
    "//form[@id='attendance_form']/div[33]/div/div[2]/button"
);
mBool.set("2K19/CO/034 AESHITA MATHUR", false);
xPath.set(
    "2K19/CO/036 AJAY PAL",
    "//form[@id='attendance_form']/div[34]/div/div[2]/button"
);
mBool.set("2K19/CO/036 AJAY PAL", false);
xPath.set(
    "2K19/CO/037 AKASH MALIK",
    "//form[@id='attendance_form']/div[35]/div/div[2]/button"
);
mBool.set("2K19/CO/037 AKASH MALIK", false);
xPath.set(
    "2K19/CO/038 AKHIL",
    "//form[@id='attendance_form']/div[36]/div/div[2]/button"
);
mBool.set("2K19/CO/038 AKHIL", false);
xPath.set(
    "2K19/CO/039 AKHIL SARWAN",
    "//form[@id='attendance_form']/div[37]/div/div[2]/button"
);
mBool.set("2K19/CO/039 AKHIL SARWAN", false);
xPath.set(
    "2K19/CO/040 AKHILESH KUMAR VERMA",
    "//form[@id='attendance_form']/div[38]/div/div[2]/button"
);
mBool.set("2K19/CO/040 AKHILESH KUMAR VERMA", false);
xPath.set(
    "2K19/CO/041 AKSHAT GUPTA",
    "//form[@id='attendance_form']/div[39]/div/div[2]/button"
);
mBool.set("2K19/CO/041 AKSHAT GUPTA", false);
xPath.set(
    "2K19/CO/042 AKSHAT JAIN",
    "//form[@id='attendance_form']/div[40]/div/div[2]/button"
);
mBool.set("2K19/CO/042 AKSHAT JAIN", false);
xPath.set(
    "2K19/CO/043 AKSHAT JAIN",
    "//form[@id='attendance_form']/div[41]/div/div[2]/button"
);
mBool.set("2K19/CO/043 AKSHAT JAIN", false);
xPath.set(
    "2K19/CO/044 AKSHAT OJHA",
    "//form[@id='attendance_form']/div[42]/div/div[2]/button"
);
mBool.set("2K19/CO/044 AKSHAT OJHA", false);
xPath.set(
    "2K19/CO/045 AKSHIT BANSAL",
    "//form[@id='attendance_form']/div[43]/div/div[2]/button"
);
mBool.set("2K19/CO/045 AKSHIT BANSAL", false);
xPath.set(
    "2K19/CO/046 AMAN",
    "//form[@id='attendance_form']/div[44]/div/div[2]/button"
);
mBool.set("2K19/CO/046 AMAN", false);
xPath.set(
    "2K19/CO/047 AMAN KUKRETTI",
    "//form[@id='attendance_form']/div[45]/div/div[2]/button"
);
mBool.set("2K19/CO/047 AMAN KUKRETTI", false);
xPath.set(
    "2K19/CO/048 AMAN MAHENDROO",
    "//form[@id='attendance_form']/div[46]/div/div[2]/button"
);
mBool.set("2K19/CO/048 AMAN MAHENDROO", false);
xPath.set(
    "2K19/CO/049 AMAN MINA",
    "//form[@id='attendance_form']/div[47]/div/div[2]/button"
);
mBool.set("2K19/CO/049 AMAN MINA", false);
xPath.set(
    "2K19/CO/050 AMAN VERMA",
    "//form[@id='attendance_form']/div[48]/div/div[2]/button"
);
mBool.set("2K19/CO/050 AMAN VERMA", false);
xPath.set(
    "2K19/CO/051 AMAR SAHGAL",
    "//form[@id='attendance_form']/div[49]/div/div[2]/button"
);
mBool.set("2K19/CO/051 AMAR SAHGAL", false);
xPath.set(
    "2K19/CO/052 AMEESHA DABAS",
    "//form[@id='attendance_form']/div[50]/div/div[2]/button"
);
mBool.set("2K19/CO/052 AMEESHA DABAS", false);
xPath.set(
    "2K19/CO/053 AMIT KUMAR JHA",
    "//form[@id='attendance_form']/div[51]/div/div[2]/button"
);
mBool.set("2K19/CO/053 AMIT KUMAR JHA", false);
xPath.set(
    "2K19/CO/054 AMOGH SACHDEVA",
    "//form[@id='attendance_form']/div[52]/div/div[2]/button"
);
mBool.set("2K19/CO/054 AMOGH SACHDEVA", false);
xPath.set(
    "2K19/CO/055 ANEESHA SHARMA",
    "//form[@id='attendance_form']/div[53]/div/div[2]/button"
);
mBool.set("2K19/CO/055 ANEESHA SHARMA", false);
xPath.set(
    "2K19/CO/056 ANIKET",
    "//form[@id='attendance_form']/div[54]/div/div[2]/button"
);
mBool.set("2K19/CO/056 ANIKET", false);
xPath.set(
    "2K19/CO/057 ANIMESH PANDE",
    "//form[@id='attendance_form']/div[55]/div/div[2]/button"
);
mBool.set("2K19/CO/057 ANIMESH PANDE", false);
xPath.set(
    "2K19/CO/058",
    "//form[@id='attendance_form']/div[56]/div/div[2]/button"
);
mBool.set("2K19/CO/058", false);
xPath.set(
    "2K19/CO/059 ANKIT KUMAR",
    "//form[@id='attendance_form']/div[57]/div/div[2]/button"
);
mBool.set("2K19/CO/059 ANKIT KUMAR", false);
xPath.set(
    "2K19/CO/060 ANKIT KUMAR SHRIVASTAV",
    "//form[@id='attendance_form']/div[58]/div/div[2]/button"
);
mBool.set("2K19/CO/060 ANKIT KUMAR SHRIVASTAV", false);
xPath.set(
    "2K19-CO-061 Ankit Raj",
    "//form[@id='attendance_form']/div[59]/div/div[2]/button"
);
mBool.set("2K19-CO-061 Ankit Raj", false);
xPath.set(
    "2K19/CO/062 ANKIT TOMAR",
    "//form[@id='attendance_form']/div[60]/div/div[2]/button"
);
mBool.set("2K19/CO/062 ANKIT TOMAR", false);
xPath.set(
    "2K19/CO/063 ANKIT YADAV",
    "//form[@id='attendance_form']/div[61]/div/div[2]/button"
);
mBool.set("2K19/CO/063 ANKIT YADAV", false);
xPath.set(
    "2K19/CO/064 ANMOL SHARMA",
    "//form[@id='attendance_form']/div[62]/div/div[2]/button"
);
mBool.set("2K19/CO/064 ANMOL SHARMA", false);
xPath.set(
    "2K19/CO/065 ANSHIKA YADAV",
    "//form[@id='attendance_form']/div[63]/div/div[2]/button"
);
mBool.set("2K19/CO/065 ANSHIKA YADAV", false);
xPath.set(
    "2K19/CO/066 ANSHUL JOSHI",
    "//form[@id='attendance_form']/div[64]/div/div[2]/button"
);
mBool.set("2K19/CO/066 ANSHUL JOSHI", false);
xPath.set(
    "2K19/CO/067 ANSHUMAN RAJ CHAUHAN",
    "//form[@id='attendance_form']/div[65]/div/div[2]/button"
);
mBool.set("2K19/CO/067 ANSHUMAN RAJ CHAUHAN", false);
xPath.set(
    "2K19/CO/068 ANSHUMAN ROY",
    "//form[@id='attendance_form']/div[66]/div/div[2]/button"
);
mBool.set("2K19/CO/068 ANSHUMAN ROY", false);
xPath.set(
    "2K19/CO/069 ANSUL",
    "//form[@id='attendance_form']/div[67]/div/div[2]/button"
);
mBool.set("2K19/CO/069 ANSUL", false);
xPath.set(
    "2K19/CO/070 ANURAG HOODA",
    "//form[@id='attendance_form']/div[68]/div/div[2]/button"
);
mBool.set("2K19/CO/070 ANURAG HOODA", false);
xPath.set(
    "2K19/CO/071 APRATIM SHRIVASTAV",
    "//form[@id='attendance_form']/div[69]/div/div[2]/button"
);
mBool.set("2K19/CO/071 APRATIM SHRIVASTAV", false);
xPath.set(
    "2K19/CO/072 ARADHYA SINGH BISHT",
    "//form[@id='attendance_form']/div[70]/div/div[2]/button"
);
mBool.set("2K19/CO/072 ARADHYA SINGH BISHT", false);
xPath.set(
    "2K19/CO/073 ARCHIT AGGARWAL",
    "//form[@id='attendance_form']/div[71]/div/div[2]/button"
);
mBool.set("2K19/CO/073 ARCHIT AGGARWAL", false);
xPath.set(
    "2K19/CO/074 ARCHIT GUPTA",
    "//form[@id='attendance_form']/div[72]/div/div[2]/button"
);
mBool.set("2K19/CO/074 ARCHIT GUPTA", false);
xPath.set(
    "2K19/CO/075 AREESHAA PARVEEN",
    "//form[@id='attendance_form']/div[73]/div/div[2]/button"
);
mBool.set("2K19/CO/075 AREESHAA PARVEEN", false);

async function startSelenium(
    id = "ajaypal_2k19co036@dtu.ac.in",
    password = "pass@123#",
    date,
    presentList = []
) {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
    await driver.get("https://www.myattendancetracker.com/login");
    await driver.findElement(By.name("email_address")).sendKeys(id);
    // await driver.findElement(By.name("password")).click();
    await driver.findElement(By.name("password")).sendKeys(password);
    await driver.findElement(By.css(".btn")).click();
    await driver.get("https://www.myattendancetracker.com/attendance");
    await driver.findElement(By.css("#class_chosen span")).click();
    await driver
        .findElement(By.xpath('//*[@id="class_chosen"]/div/ul/li[2]'))
        .click();
    await driver
        .findElement(
            By.xpath('//*[@id="attendance_main"]/div/div[1]/h4/div[3]/div/a')
        )
        .click();
    await driver
        .findElement(
            By.xpath(
                '//*[@id="attendance_main"]/div/div[1]/h4/div[3]/div/ul/li/a[2]'
            )
        )
        .click();

    for (const [key, value] of mBool.entries()) {
        if (presentList.includes(key.substring(8, 11))) {
            var temp = xPath.get(key);
            await driver.findElement(By.xpath(temp)).click();
        }
    }

    await driver.executeScript(
        `document.getElementById('formdate').setAttribute('value', '${date}')`
    );
    await driver
        .findElement(By.xpath("//form[@id='attendance_form']/button"))
        .click();
    // driver.close();
}
// startSelenium();
module.exports = { startSelenium };