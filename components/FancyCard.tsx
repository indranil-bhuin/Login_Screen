import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Your new Friends</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://img.rawpixel.com/private/static/images/website/2022-05/ns8230-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b3961e17298745c0868eeef46211c3d0'
        }}
        style={styles.cardImage} />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Cute Puppy</Text>
            <Text style={styles.cardLabel}>Hello</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor atque blanditiis voluptas commodi maxime perspiciatis earum quaerat sit cumque repudiandae? Veritatis est aut reprehenderit, sed voluptatibus soluta quod natus ipsum?</Text>
            <Text style={styles.cardFooter}>Only Biscuits</Text>
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
        height: 390,
        borderRadius: 5,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 4
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: "#000000",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardDescription: {
        color: "#000000",
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6
    },
    cardLabel: {
        color: "#000000",
        fontSize: 14,
        marginBottom: 4
    },
    cardFooter: {
        color: '#000000',
        fontSize: 12
    }
})