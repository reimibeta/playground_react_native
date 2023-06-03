# add package
    yarn add file:..\packages\react-native-pin-lock-view
    yarn add link:..\packages\react-native-pin-lock-view
    # add this to project tsconfig
    "compilerOptions": {
        //
        "paths": {
            "react-native-pin-lock-view": ["./node_modules/react-native-pin-lock-view/src/index"]
        },
    }

# create package
    npx create-react-native-library@latest react-native-awesome-module
    yarn
    # Android app
    yarn example android
    # iOS app
    yarn example ios

# create project
    npx create-expo-app --template  
    # add typescript if not available
    # npm
    npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
    # yarn
    yarn add --dev @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
    # create tsconfig.json
    {
        "extends": "@tsconfig/react-native/tsconfig.json"
    }