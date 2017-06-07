# cgi is imported to process user input submitted through HTML
import cgi
# cgitb is imported to help with any troubleshooting during development, the enable method logs the bug reports in the logdir directory
import cgitb
cgitb.enable(display=0, logdir="/script/logdir")


form = cgi.FieldStorage()
print('the form object', form)
name = form.getvalue('name')
print('the name: ', name)