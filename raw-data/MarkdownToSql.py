with open('y.md') as f:
    table='notes'
    notebook='MySQL'
    query_prefix='insert into '+table+'(title,content,notebook) values ('
    query_postfix=',\''+notebook+'\' );\n'

    got_title=False
    queries=[]
    title=''
    content=''
    lines = f.readlines() # list containing lines of file

    for line in lines:

      line = line.strip() # remove leading/trailing white spaces 
      line = line.replace("'", "\\'") 

      if line.startswith('# ') or line.startswith('## '):
        if len(title):
          q=query_prefix+"'"+title+"','"+content+"'"+query_postfix
          queries.append(q)
        title=''
        content=''
        got_title=False        

      elif line.startswith('### '):
        if len(title):
          q=query_prefix+"'"+title+"','"+content+"'"+query_postfix
          queries.append(q)
        title=''
        content=''
        line=line[4:]
        title=line
        got_title=True

      elif got_title:
        content=content+'\n'+line



# pretty printing list of dictionaries
# print(json.dumps(my_list, indent=4))
listToStr = '\n'.join([str(elem) for elem in queries])
print('writing to json file...')
with open(notebook+'.sql', 'w') as outfile:
   outfile.write(listToStr)
print('done.')