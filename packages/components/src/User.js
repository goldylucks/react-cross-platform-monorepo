import React from "react"
import { View, Text } from "react-native"

function User({ name }) {
  return (
    <View>
      <Text>I am {name}</Text>
    </View>
  )
}

export default User
