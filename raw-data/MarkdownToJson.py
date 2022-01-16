import json
my_list = [];

with open('y.md') as f:
    lines = f.readlines() # list containing lines of file
    columns = [] # To store column names

    i = 1
    got_title=False
    d = {} # dictionary to store file data (each line)
    title=''
    content=''

    for line in lines:
        line = line.strip() # remove leading/trailing white spaces  

        if line.startswith('# ') or line.startswith('## '):
          if len(title):
            d['note_title']=title
            d['note_content']=content
            my_list.append(d) # append dictionary to list
            title=''
            content=''
          d = {} # dictionary to store file data (each line)
          got_title=False        

        elif line.startswith('### '):
          if len(title):
            d['note_title']=title
            d['note_content']=content
            my_list.append(d) # append dictionary to list
            title=''
            content=''
          d = {} # dictionary to store file data (each line)
          line=line[4:]
          title=line
          got_title=True

        elif got_title:
          content=content+'\n'+line



# pretty printing list of dictionaries
print(json.dumps(my_list, indent=4))
print('writing to json file...')
with open('json_data.json', 'w') as outfile:
    outfile.write(json.dumps(my_list, ensure_ascii=False,  indent=4))
print('done.')