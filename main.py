import flask
import json

app = flask.Flask("__main__")

# React Route
@app.route("/")
def my_index():
    testUser = {'name':"Test User",
                'grantMatches': [{}, {}, {}],
                'matchedGrants': [],
                'adminsAndCoadmins': [{'picture': '', 'name': "Frank Bochowski", 'title': "Admin"}, {'picture': '', 'name': 'Tom Bombadil', 'title':'Co-Admin'}, {'picture': "", 'name': "Bob Horatio", 'title': "Co-Admin"}],
                "projects": [{'title': "Project One", 'manager': "Test Manager One", 'events': []}, {'title': "Project Two", 'manager': "Test Manager Two", 'events': []}, {'title': "Project Three", 'manager': "Test Manager Three", 'events': []}],
                "watchedGrants": [{'name': "Test Grant One", 'submissiondate': "July 4th 1784", 'amount': "$1000", 'notes': "This is the first test grant"}, {'name': "Test Grant Two", 'submissiondate': "July 4th 1784", 'amount': "$1000", 'notes': "This is the second test grant"}],
                "appliedGrants": [{'name': "Test Grant One", 'submissiondate': "July 4th 1784", 'amount': "$1000", 'notes': "This is the first applied for grant", 'status': "won"}, {'name': "Test Grant Two", 'submissiondate': "July 4th 1784", 'amount': "$1000", 'notes': "This is the second applied for grant", 'status': 'pending'}, {'name': "Test Grant three", 'submissiondate': "July 4th 1784", 'amount': "$1000", 'notes': "This is the third applied for grant", 'status': 'lost'}],
                }
    token = json.dumps(testUser)
    return flask.render_template("index.html", userData=testUser)
# React Route

@app.errorhandler(404)
def not_found():
    return redirect('/')


@app.route("/reservedroute", methods=['post'])
def reserved():
    # Process Data and submit to database
    return redirect('/')

# debug=True
# if name == 'main':
app.run(debug=True)