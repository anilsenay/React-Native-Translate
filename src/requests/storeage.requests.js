import {AsyncStorage} from 'react-native';

const retrieveData = async () => {
  try {
      AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
              // get at each store's key/value so you can work with it
              let key = store[i][0];
              let value = store[i][1];
              console.log(key + " " + value)
            });
          });
        });
  } catch (error) {
    // Error retrieving data
  }
};

const removeData = async (input, output) => {
  try {
    await AsyncStorage.removeItem(input+""+output);
} catch (error) {
  console.log(error)
}
}

const storeData = async (input, output) => {
try {
    await AsyncStorage.setItem(input+""+output, JSON.stringify({input,output}));
} catch (error) {
    console.log("error")
}
};

export {
    retrieveData,
    storeData,
    removeData,
}