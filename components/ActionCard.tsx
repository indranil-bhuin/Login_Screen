import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Puppy Foods
          </Text>
        </View>
        <Image source={{uri: 'https://www.puprise.com/wp-content/uploads/2019/08/Himalaya-Healthy-Pet-Food-Chicken-Rice-Puppy-Food.jpg'}}
        style={styles.cardImage} />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae minima quia delectus vitae odio quibusdam adipisci nesciunt veniam, omnis modi voluptate blanditiis ad eum, laboriosam culpa. Nam, accusantium maiores.
          </Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://google.com')
            }>
              <Text style={styles.bodyText}>
                Read More
              </Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card: {
      width: 350,
      height: 450,
      borderRadius: 5,
      marginVertical: 12,
      marginHorizontal: 16
    },
    elevatedCard: {
      backgroundColor: '#ffffff',
      elevation: 5,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    headerText: {
      color: '#000',
      fontSize: 14,
      fontWeight: '500'
    },
    headingContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    cardImage: {
      height: 300
    },
    bodyContainer: {
      padding: 10
    },
    footerContainer: {
      paddingTop: 8,
      color: '#000'
    },
    bodyText: {
      color: '#000',
      fontSize: 12
    }
})