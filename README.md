## Synopsis

This app was developed to integrate knowledge about bigdata, using Hadoop and MapReduce algorithm with inverted Index.

## How to use this App
Download this app using _git clone https://github.com/lgutie16/BigdataApp.git_ after that, go to the root folder and use the next command _npm install_


## Folder Structure

```
BIGDATA/
  app/
  config/
  	database.json
  models/
  	index.js
  	wordModel.js
  node_modules/
  processAndTransformFiles/
  	format-convertion.py
  	mapreduce-clean.py
  public/
  routes/  	
  	index.js
  	word.js
  views/  
  app.js
  bower.json
  gulpfile.js  
  package.json
```


## Instruction to run this Project
Follow the next instructions to run this project localy

``` 
 https://github.com/lgutie16/BIGDATA.git 	[Clone the project in your selected directory]
 cd BIGDATA                                 [Go inside the main source directory]
 node app.js                                [Run app]

``` 

## ETL step
### Extract
	This step was made using wget command
### Transform
	This steps was made using files in _processAndTransformFiles_ directory

### Load
	This steps was made HDFS command to load data to HDFS directory.


## About _processAndTransformFiles_ 
In the folder _processAndTransformFiles_ there is two files which help us to deal with the processing and transformation of the data contained in Gutenberg HDFS directory.
### MapReduce
	``` python
	# -*- coding: utf-8 -*-

	from mrjob.job import MRJob
	from mrjob.compat import jobconf_from_env
	import unicodedata
	import re

	class MRWordFrequencyCount(MRJob):
	    def mapper(self, _, line):

	      data = u = unicode(line, "utf-8")
	      normal = unicodedata.normalize('NFKD', data).encode('ASCII', 'ignore')
	      new_line = re.sub('\W+',' ', normal.lower())

	      filename = jobconf_from_env('mapreduce.map.input.file')
	    
	      for w in new_line.decode('utf-8','ignore').split():
	        yield (w, filename), 1

	    def reducer(self, w, values):
	      yield w, sum(values)

	if __name__ == '__main__':
	    MRWordFrequencyCount.run()

	``` 

### Format Text produced by MapReduce process
	``` python
	#!/usr/bin/python
	# -*- coding: utf-8 -*-
	import unicodedata, re
	import sys

	infile = open(str(sys.argv[1]), 'r')

	for line in infile:
		new_line = ''.join([i for i in line if not i=='"'])[:-1]
		new_line = new_line.translate(None, '!@#$[]')
		new_line = new_line.replace('/datasets/download/gutenberg','')
		new_line = re.sub(r'(.txt)', r'\1,', new_line)
		new_line = ',' + new_line
		print new_line

	infile.close()

	``` 

## License

A short snippet describing the license (MIT, Apache, etc.)

