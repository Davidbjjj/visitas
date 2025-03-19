import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function BusinessCard() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpeg')} style={styles.profileImage} />
      <Text style={styles.name}>David Pontes</Text>
      <Text style={styles.description}>
        Desenvolvedor Back-End | Java & Spring Boot
      </Text>
      <Text style={styles.details}>
        Apaixonado por tecnologia, arquitetura de software e boas práticas de programação. Sempre buscando inovação e eficiência no desenvolvimento de sistemas.
      </Text>
      <Text style={styles.details}>
        Possui experiência em APIs REST, banco de dados, segurança da informação e integração de sistemas. Além disso, tem interesse em inteligência artificial e automação.
      </Text>
      <Text style={styles.quote}>
        "Uma pessoa linda que leu muitos filósofos existencialistas e inteligente demais."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 10,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#bbb',
    textAlign: 'center',
  },
});