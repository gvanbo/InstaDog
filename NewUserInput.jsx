import React, { useState } from "react";
import { View } from "react-native";

import InputWithLabel from "./InputWithLabels.component";

function NewUserInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("")
  const [toy, setToy] = useState("")
  const [birthday, setBirthday] = useState("")

  function confirmPasswordMatch(props) {
      const { nativeEvent: {text}} = props;

    if (text !== password){
        alert('Passwords do not match')
    } else {
        alert('passwords match, good job!')
    }
  }

  function practiceAlert(){
      alert('Just a Practice =)')
  }

  return (
    <View>
      <InputWithLabel
        label="Email"
        placeholder="name@mail.com"
        value={email}
        onChangeText={setEmail}
        onSubmitEditting={practiceAlert}
      />
      
      <InputWithLabel
        label="Password"
        placeholder="type your password here"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputWithLabel
        label="Confirm Password"
        placeholder="retype your password here"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        onSubmitEditing={confirmPasswordMatch}
      />
      <InputWithLabel
        label="Name"
        placeholder="type your dog's name here"
        value={name}
        onChangeText={setName}
      />
      <InputWithLabel
        label="Birthday"
        placeholder="month day year"
        value={birthday}
        onChangeText={setBirthday}
      />
      <InputWithLabel
        label="Breed"
        placeholder="type breed"
        value={breed}
        onChangeText={setBreed}
      />
      <InputWithLabel
        label="Favourite Toy"
        placeholder="write the name of your favourite toy"
        value={toy}
        onChangeText={setToy}
      />
    </View>
  );
}

export default NewUserInput;
