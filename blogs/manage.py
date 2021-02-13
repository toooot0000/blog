import cli.app
import json
""" 
--add blogName           : add a blog page named blogName, show its id
--del blogName_or_blogId : delete a blog page of the given name or id
--init                   : initialize the config.json
--update                 : update the config.json
"""


@cli.app.CommandLineApp
def entry(app):
    print("This is a test command line app!")
    print(app.params)

    def add(name):
        print('This is func. add! Copy!')
        pass

    def delete(nameOrId):
        print('This is func. delete! Copy!')
        pass

    def init():
        print('This is func. init! Copy!')
        pass
    
    def update():
        # 
        pass
    

    # return 'This is just a test command line app!'
    if app.params.add:
        # print('Add a blog named: ' + app.params.add)
        add(app.params.add)
    if app.params.dele:
        delete(app.params.dele)
    if app.params.init:
        init()
    if app.params.update:
        update()



# entry.add_param("test", help="Test the basic function.")
entry.add_param("-A", "--add", help="add a blog of the given name",
                default=None, required=False)
entry.add_param(
    "-D", "--dele", help="delete a blog of the given name", default=None, required=False)
entry.add_param(
    "-i", "--init", help="initialize the config.json", action='store_true', required=False)
entry.add_param(
    "-u", "--update", help="update the config.json", action='store_true', required=False)

if __name__ == "__main__":
    entry.run()
