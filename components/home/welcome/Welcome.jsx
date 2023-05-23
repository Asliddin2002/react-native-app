import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import {useRouter} from "expo-router"
import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'

const jobs = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter()
  const [activeJobType,  setActiveJobType] = useState("Full-time")
  return (
    <View>
      <View  style={styles.container}>
        <Text style={styles.userName}>Hello Asliddin</Text>
        <Text style={styles.welcomeMessage}>Finding a perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput} 
            value=''
            placeholder='What are you looking for?'
            onChange={()=> {}} 
            />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=> {}}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage}/> 
        </TouchableOpacity>
      </View>
      <View>
        <FlatList 
        data={jobs}
        renderItem={({item}) => (
        <TouchableOpacity 
        onPress={()=> {setActiveJobType(item), router.push(`/search/${item}`)}}
        style={styles.tab(activeJobType, item)}
        >
          <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
        </TouchableOpacity>)}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        />
      </View>
    </View> 
  )
}

export default Welcome