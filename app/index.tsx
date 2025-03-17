import { Redirect } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { ScrollView, View, Image, Text } from 'react-native'
import { images } from "@/constants"
import { router } from 'expo-router'

export default function Index() {

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      { isLoggedIn &&  <Redirect href="/(tabs)/home" /> }
      { 
        !isLoggedIn && <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className="w-full flex justify-center items-center h-full px-8">
            
            
            <Image
              source={images.logo}
              className="h-[84px]"
              resizeMode="contain"
            />

           
            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[298px]"
              resizeMode="contain"
            />

            
            <View className="relative mt-5">
              <Text className="text-2xl text-white font-bold text-center">
                Discover Endless{"\n"}
                Possibilities with{" "}
                <Text className="text-secondary-200">AuraShop</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[120px] h-[15px] absolute -bottom-4 -right-8"
                resizeMode="contain"
              />
            </View>

           
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where Creativity Meets Innovation: Embark on a Journey of Limitless
              Exploration with Aora
            </Text>

           
            <CustomButton
              title="Continue with Email"
              handlePress={() => { 
                router.push("/login")
              }}
              containerStyles="w-full mt-7"
            />

          </View>
        </ScrollView>
        </SafeAreaView> 
      }
    </>
  )
}