from flask import render_template, request, redirect, url_for, flash
from wtforms import Form, BooleanField, StringField, PasswordField, validators
import os
from flask import Flask
from werkzeug.utils import secure_filename
import sqlite3 as sql
import pandas as pd

#import os
#for page in os.listdir():
#    print(f'''@app.route("/{page[:-5].lower()}"){chr(10)}def {page[:-5]}():{chr(10)}


#return render_template("{page}"){chr(10)}''')
# Remove special characters from route and def

"""for page in os.listdir():
     print(f'@app.route("/{page[:-5]}"){chr(10)}def {page[:-5]}():{chr(10)}') 
"""

app = Flask(__name__)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
UPLOAD_FOLDER = """C:\\Users\\Cecil\\PycharmProjects\\GUF_Site\\uploaded_docs"""
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


"""
@app.route("/form", methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        dropdownopt = request.form.getlist('f4')
        options1 = request.form.getlist('f5[]')
        options2 = request.form.getlist('f7[]')

        return f'checks : {dropdownopt} {chr(10)} Options 1 {options1} {chr(10)} Options 2 {options2}'
    return render_template("form.html")"""

@app.route("/" , methods=['GET', 'POST'])
@app.route("/index", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        firstname = request.form.get('firstName')
        lastname = request.form.get('lastname')
        emailadd = request.form.get('email')
        businessinfo = request.form.get('businessinfo')

        with sql.connect("database.db") as con:
            cur = con.cursor()
            cur.execute("INSERT INTO students (firstname,lastname,emailadd)VALUES(?, ?, ?,?)",(nm,addr,city,pin) )

        return f'''Welcome {firstname} {lastname} and Welcome to our Site, we have recorded your email as {emailadd}
                   and your Organization as {businessinfo}'''

    return render_template("index.html")

@app.route("/alignmenttestting")
def alignmenttestting():
    return render_template("alignment testting.html")

@app.route("/freetrial")
def freetrial():
    return render_template("freetrial.html")


@app.route("/p2education")
def p2education():
    return render_template("p2education.html")

@app.route("/faq")
def faq():
    return render_template("faq.html")

@app.route("/register_form", methods=['GET', 'POST'])
def register_form():
    if request.method == 'POST':
        prefix1 = request.form.get('f4')
        firstname = request.form.get('f5')
        lastname = request.form.get('f6')
        namesuffix = request.form.get('f7')
        addressline1 = request.form.get('f8_addressLine1')
        addresscity = request.form.get('f8_city')
        addressstate = request.form.get('f8_state')
        addresszip = request.form.get('f8_postalCode')
        addresscountry = request.form.get('f8_country')
        emailaddress = request.form.get('f9')
        currentstatus= request.form.getlist('f10[]')
        phonenumber = request.form.get('f11')
        phoneext = request.form.get('f12')
        educationdesigna = request.form.get('f14')
        applicationfor = request.form.getlist('f15[]')
        fundinguse = request.form.getlist('f16[]')
        nonprofittype = request.form.getlist('f18[]')
        orgdemographic = request.form.getlist('f19[]')
        religousaffil = request.form.get('f56')
        institanddept = request.form.get('f22')
        programsofinterest = request.form.getlist('f54[]')
        fafsaformcomplete = request.form.get('f55')
        samnumbersystem = request.form.get('f20')
        dunsnumber = request.form.get('f21')
        specialconsid = request.form.getlist('f24[]')
        genderconsid = request.form.get('f27[]')
        investigatortype = request.form.getlist('f29[]')
        gpascore = request.form.get('f30')
        ethnicity = request.form.get('f31')
        underservedpop = request.form.get('f32')
        typeofgrant = request.form.getlist('f33[]')
        grantstowatch = request.form.getlist('f34[]')
        neededfunding = request.form.get('f35')
        grantusedfor = request.form.getlist('f36[]')
        researchtype = request.form.get('f37')
        aboutproject = request.form.get('f38')
        grantkeywords = request.form.get('f39')
        publishedwork = request.form.get('f40[]')
        locationpreference = request.form.get('f41[]')




        return f'''Thank you {namesuffix} {firstname} {lastname} {chr(10)} , 
                   We have recorded your Address as :{chr(10)}
                   {addressline1}  {addresscity} {addressstate} {addresszip} {addresscountry}
                   Your Email address is : {emailaddress}
                   Your Status has been recorded as : {currentstatus}
                   Your phone number is {phonenumber} Ext {phoneext}
                   Your Education Designation is {educationdesigna}
                   Appliation For {applicationfor} {fundinguse}
                   Your non profit is of type {nonprofittype}
            
                   - Your Submission has been Accepted'''


    return render_template("register_form.html")

@app.route("/preregsmb")
def preregsmb():
    return render_template("preregsmb.html")

@app.route("/tworule")
def tworule():
    return render_template("tworuleform.html")

@app.route("/simpleform")
def simpleform():
    return render_template("simpleform.html")

@app.route("/govtrial")
def govtrial():
    return render_template("govtrial.html")

@app.route("/prereggov")
def prereggov():
    return render_template("prereggov.html")

@app.route("/page2smallbus")
def page2smallBus():

    df = pd.readsql('tablename')
    return render_template("page2smallBus.html",df)

@app.route("/nlp")
def nlp():
    return render_template("nlp.html")

@app.route("/signupacademicsessen")
def signUpAcademicsEssen():
    return render_template("signUpAcademicsEssen.html")

@app.route("/preregeducation")
def preregeducation():
    return render_template("preregeducation.html")

@app.route("/userportal")
def userPortal():
    return render_template("userPortal.html")

@app.route("/pricingsmallbusiness")
def pricingSmallBusiness():
    return render_template("pricingSmallBusiness.html")

@app.route("/page2government")
def page2government():
    return render_template("page2government.html")

@app.route("/pricingplans")
def pricingplans():
    return render_template("pricingplans.html")

@app.route("/page2education")
def page2education():
    return render_template("page2education.html")

@app.route("/pricingeducation")
def pricingEducation():
    return render_template("pricingEducation.html")

@app.route("/eduplans")
def eduplans():
    return render_template("eduplans.html")

@app.route("/intakeforgovernment")
def intakeForGovernment():
    return render_template("intakeForGovernment.html")

@app.route("/freetrialsignupacademic")
def freeTrialSignupAcademic():
    return render_template("freeTrialSignupAcademic.html")

@app.route("/aboutandteam")
def aboutandteam():
    return render_template("aboutandteam.html")

@app.route("/smbtrial")
def smbtrial():
    return render_template("smbtrial.html")

@app.route("/freeTrialSignupAcademic")
def freetrialacademic():
    return render_template("freeTrialSignupAcademic.html")


@app.route("/pricingEducation")
def pricingeducation():
    return render_template("pricingEducation.html")

@app.route("/form")
def form():
    return render_template("form.html")

@app.route("/pricing-small-business")
def pricingsmallbusiness():
    return render_template("pricing-small-business.html")

@app.route("/tempcodespot")
def tempcodespot():
    return render_template("tempcodespot.html")

@app.route("/pricinggovernment")
def pricingGovernment():
    return render_template("pricingGovernment.html")

@app.route("/businessfreesignup")
def businessFreeSignup():
    return render_template("businessFreeSignup.html")

@app.route("/academicfreesignup")
def academicFreeSignup():
    return render_template("academicFreeSignup.html")

@app.route("/team")
def team():
    return render_template("team.html")

@app.route("/govplans")
def govplans():
    return render_template("govplans.html")

@app.route("/smbplans")
def smbplans():
    return render_template("smbplans.html")

@app.route("/page2")
def page2():
    return render_template("page2.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/intakeforacademics")
def intakeForAcademics():
    return render_template("intakeForAcademics.html")

@app.route("/govfreesignup")
def govFreeSignup():
    return render_template("govFreeSignup.html")

@app.route("/userportaloriginpage")
def userPortalOriginPage():
    return render_template("userPortalOriginPage.html")

@app.route("/p2smb")
def p2smb():
    return render_template("p2smb.html")

@app.route("/educationtrial")
def educationtrial():
    return render_template("educationtrial.html")

@app.route("/terms")
def terms():
    return render_template("terms.html")

@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return 'I Failed  - Please dont Punish Me - 404 Build Here'


if __name__ == '__main__':
    app.run(host='173.255.210.168', debug=True)

if __name__ == '__main__':
    app.run(debug=True)






