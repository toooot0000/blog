import cli.app
import json
import re
import markdown2
from pathlib import Path

# basePath = os.path.dirname(os.path.realpath(__file__))  # 获取当前路径
# configPath = os.path.join(basePath, "config.json")
# projPath = os.path.join(basePath, '../')

basePath = Path(__file__).parent.resolve()
configPath = basePath/'config.json'
projPath = (basePath/'..').resolve()
print('Project Path         : '+str(projPath))

f = open(configPath, '+')
config = json.loads(f.read())

# build path
buildFolderPath = (projPath / config['buildPath'])
print('Build Folder Path    : '+ str(buildFolderPath))

# find the template file
templatePath = (projPath / config['templatePath']).resolve()
print('Template Path        : '+ str(templatePath))

# the template reg
subPattern = r"\[\[content\]\]"


""" 
--add blogName           : add a blog page named blogName, show its id
--del blogName_or_blogId : delete a blog page of the given name or id
--init                   : initialize the config.json
--update                 : update the config.json and generate blog pages
"""


@cli.app.CommandLineApp
def entry(app):
    # print("This is a test command line app!")
    # print(app.params)

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
        print('Update')
        # get the template file
        try:
            template = templatePath.open()
        except:
            print('Sth wrong with template!')
            assert(False)
        # change all path to /docs/js /docs/css /docs/img
        template = re.sub(r'\./js', '/docs/js', template.read())
        template = re.sub(r'\./css', '/docs/css', template)
        template = re.sub(r'\./img', '/docs/img', template)

        # loop blogList
        for blog in config['blogList']:
            print('Looping...')
            # blog .md file path relative to project folder
            blogName = blog['name'] if blog['name'].endswith(
                '.md') else blog['name']+'.md'
            # print(blogName)
            blogFolderPath = basePath/blog['folderPath']
            # print(blogFolderPath)
            blogPath = blogFolderPath/blogName
            # print(blogPath)
            # use markdown2 to read the md file and convert it to html
            blogHtml = markdown2.markdown_path(str(blogPath))
            # print(blogHtml)

            blogBuildFolderPath = buildFolderPath/blog['folderPath']
            # print(blogBuildFolderPath)

            blogBuildPath = blogBuildFolderPath/'index.html'
            # print(blogBuildPath)

            # substitude '[[content]]' part in the template for the blog html
            subedHtml = re.sub(subPattern, blogHtml, template)
            # print(subedHtml)
            # save processed html as blog.html
            if not blogBuildFolderPath.exists():
                # print('make dir ')
                blogBuildFolderPath.mkdir(parents=True)
            
            with blogBuildPath.open('w') as blogHtmlFile:
                blogHtmlFile.write(subedHtml)
            
            # move all .png/.jpg/.gif file to the same folder

            pass

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
