matrix = [['7','T','h','í','s','$','#','^'],  
                ['í','s','%',' ','M','a','t','r'],
                 ['í','x','?','#',' ',' ','%''!']]
for colum in matrix: 
    for row in colum:
        if row.isalpha(): 
         print(row,end='')
         
        else: 
            print(' ',end='')