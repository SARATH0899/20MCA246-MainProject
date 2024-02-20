// OrderPDF.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const OrderPDF = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Order ID: {order._id}</Text>
        <Text>User: {order.user.name}</Text>
        <Text>Email: {order.user.email}</Text>
        <Text>Address: {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</Text>
        <Text>Total Price: ₹{order.totalPrice}</Text>
        {/* Add more order details as needed */}
      </View>
    </Page>
  </Document>
);

export default OrderPDF;
