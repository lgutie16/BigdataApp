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
