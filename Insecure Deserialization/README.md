# Purpose of the repository

This repo does contain a Node.js code that is vulnerable against CVE-2017-5941. Do not use it in any production environments.

You can also find the patched version of the same vulnerable code in the repo.

If you wish to see the article on this repo please click on [this link]().
 
# Insecure Deserialization

Serialization is the process of translating an object or data structure into a more suitable format to transfer it via a preferred medium(such as network, storage, array buffer, etc.) and reconstructing it later. Serialization is not available for static-type languages(Go, C/C++, etc.) since dynamic objects cannot be cast to another object.

There are different libraries or classes for different languages for serialization/deserialization purposes such as;

Python - Pickle
PHP - Serialize/Unserialize
Java - objectInputStream/objectOutputStream
Javascript - JSON.stringfy()/JSON.parse()

Deserialization is the exact opposite of serialization(shocking right??!!). It’s reconstructing the translated data to its original format.

Using these two processes is giving advantages to developers. In Java programming, it’s easily making possible the transportation of the code from one JVM to another one. Another use case for VM containing languages(Java, .NET Core, C#) is that this process is making the deep copy available.
# Risks of insecure deserialization

Insecure deserialization’s impact is depending on the business criticality of the application. It may lead to remote code execution, denial of service(DoS) attacks, and authentication bypasses. SAST, DAST, and IAST tools sometimes are capable of detecting such vulnerabilities yet a human’s supervision would be good to confirm the findings.
It’s still on the OWASP 10 list as of 2021, and it has not been changed. Since the capability of automatic application security products is advancing it’s expected to raise the encounterings with them in the future.