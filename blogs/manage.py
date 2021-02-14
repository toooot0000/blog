import cli.app
import json
import re
import markdown2
from pathlib import Path
from shutil import copy
from time import gmtime, strftime

basePath = Path(__file__).parent.resolve()
configPath = basePath/'config.json'
projPath = (basePath/'..').resolve()
print('Project Path         : '+str(projPath))

configFile = open(configPath, 'r+')
config = json.loads(configFile.read())
configFile.close()

# build path
buildFolderPath = (projPath / config['buildPath'])
print('Build Folder Path    : ' + str(buildFolderPath))

# find the template file
templatePath = (projPath / config['templatePath']).resolve()
print('Template Path        : ' + str(templatePath))

# the template reg
subPattern = r"\[\[content\]\]"

# pic formats
picFormats = ['.ico', '.png', '.jpg', '.gif']

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
        print('Add blog page')
        if((basePath/name).exists()):
            print(
                'You already have a blog of the same name! \nPlease consider changing the name!')
            return
        title   = input('Blog title: ')
        content = input("Blog desc: ")
        time    = strftime("%Y-%m-%d", gmtime())
        tags    = []
        headPic = "/"
        # create the folder name/
        (basePath/name).mkdir()

        # add the main .md file
        with (basePath/name/(name+".md")).open('w') as mdFile:
            mdFile.write('# ' + title + '\n')
            pass

        # add info file
        with (basePath/name/'info.json').open('w') as infoFile:
            info = {
                "title": title,
                "content": content,
                "time": time,
                "tags": tags,
                "head-pic": headPic
            }
            infoFile.write(json.dumps(info))
            pass

        # update config
        print('Add to blogList...')
        config['curId'] += 1
        _id = config['curId']
        print('Current Id: '+str(config['curId']))
        # print(config['blogList'])
        config['blogList'].append(
            {
                'id': _id,
                'name': name,
                'folderPath': name,
            }
        )
        # print(config['blogList'])
        with configPath.open('w+') as configFile:
            print('Rewrite config.json...')
            configFile.write(json.dumps(config))
        print("Adding blog page complete!")
        pass

    # TODO
    def delete(nameOrId):
        print('This is func. delete! Copy!')
        pass

    # TODO
    def init():
        print('This is func. init! Copy!')
        pass

    def update():
        print('Update')
        # get the template file
        try:
            templateFile = templatePath.open()
        except:
            print('Sth wrong with template!')
            assert(False)
        # change all path to /docs/js /docs/css /docs/img
        template = re.sub(r'\./js', '/docs/js', templateFile.read())
        template = re.sub(r'\./css', '/docs/css', template)
        template = re.sub(r'\./img', '/docs/img', template)
        templateFile.close()

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

            # TODO if blog is not modified, continue

            # use markdown2 to read the md file and convert it to html
            try:
                blogHtml = markdown2.markdown_path(str(blogPath))
            # print(blogHtml)
            except:
                Warning('Config contains a missing blog!\nName: '+blog['name'] )
                continue

            blogBuildFolderPath = buildFolderPath/blog['folderPath']
            # print(blogBuildFolderPath)

            blogBuildPath = blogBuildFolderPath/'index.html'
            # print(blogBuildPath)

            # substitude '[[content]]' part in the template for the blog html
            subedHtml = re.sub(subPattern, blogHtml, template)

            # save processed html as blog.html
            if not blogBuildFolderPath.exists():
                # make the directory
                blogBuildFolderPath.mkdir(parents=True)

            # write the index.html
            with blogBuildPath.open('w') as blogHtmlFile:
                blogHtmlFile.write(subedHtml)

            # copy all .png/.jpg/.gif file to the same folder
            for filePath in blogFolderPath.iterdir():
                if(filePath.suffix in picFormats):
                    targetPath = blogBuildFolderPath/filePath.name
                    copy(str(filePath), str(targetPath))
            pass
        print('Update completed!')
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
