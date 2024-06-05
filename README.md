# ECS-161 Presentation Demo

## Steps to run Demo 1
- First `git clone` or download the files.
- Once extracted to a directory, then run `npm install`.
- After installation is finished, run project through `npm run dev`.

## Steps to run Demo 2
- Install `swagger-codegen`.
    - macOS: `brew install swagger-codegen`
    - Windows/Linux: wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.57/swagger-codegen-cli-3.0.57.jar -O swagger-codegen-cli.jar
    - *Please Note: Java 8 has to be installed before running*
- Extract `api.yaml` file to separate directory.
- In directory, run
    - macOS: `swagger-codegen -i api.yaml -l nodejs-server`
    - Windows/Linux: `java -jar swagger-codegen-cli.jar -i api.yaml -l nodejs-server`
- In terminal, run `npm start` to start local server and view.
