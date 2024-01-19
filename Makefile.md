### Testing Obfuscation Method
1. Place source code on other platform and fetch it
[Link](https://thehackernews.com/2024/01/beware-3-malicious-pypi-packages-found.html)

2. Decode and Encode with base64
[Link](https://www.bleepingcomputer.com/news/security/hundreds-of-malicious-python-packages-found-stealing-sensitive-data/)
3. Use benign variable name
4. Strings include a mix of bold and italic fonts and are still readable and can be parsed by the Python interpreter, only to activate the execution of the stealer malware upon installation of the package
[Link](https://thehackernews.com/2023/03/malicious-python-package-uses-unicode.html)


### How Malicious Code Work ?
1. First, In **setup.py**, detecting `sys.platform`(OS). Second, installing required package. Third, developing the path for target. 
    > 2022-11-07-beautifulsup4-0.1

### Payload
1. 