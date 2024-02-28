import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 50,
    borderWidth: 5,
    borderColor: 'black',
    borderStyle: 'solid', 
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 20,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginRight: 10,
  },
  addressBox: {
    width: '45%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    paddingRight: 5, 
  },
  addressText: {
    marginBottom: 5,
  },
  table: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: '#eee',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 8,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalCell: {
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontSize: 10,
    fontStyle: 'italic',
    color: '#555',
  },
});

const OrderPDF = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Order Invoice</Text>
      <View style={styles.section}>
        <View style={styles.addressContainer}>
          <View style={styles.addressBox}>
            <Text style={styles.addressText}>Billing Address:</Text>
            <Text style={styles.addressText}>{order.user.name}</Text>
           <h4> <Text style={styles.addressText}>{order.user.email}</Text></h4>
            <Text style={styles.addressText}>
              {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
              {order.shippingAddress.postalCode}, {order.shippingAddress.country}
            </Text>
          </View>
          <View style={styles.addressBox}>
            <Text style={styles.addressText}>Shipping Address:</Text>
            <Text style={styles.addressText}>{order.user.name}</Text>
            <Text style={styles.addressText}>{order.user.email}</Text>
            <Text style={styles.addressText}>
              {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
              {order.shippingAddress.postalCode}, {order.shippingAddress.country}
            </Text>
          </View>
        </View>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, { width: '40%' }]}>Product</Text>
            <Text style={[styles.tableCell, { width: '20%' }]}>Price</Text>
            <Text style={[styles.tableCell, { width: '20%' }]}>Quantity</Text>
            <Text style={[styles.tableCell, { width: '20%' }]}>Total</Text>
          </View>
          {order.orderItems.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={[styles.tableCell, { width: '40%' }]}>{item.name}</Text>
              <Text style={[styles.tableCell, { width: '20%' }]}>₹{item.price}</Text>
              <Text style={[styles.tableCell, { width: '20%' }]}>{item.qty}</Text>
              <Text style={[styles.tableCell, { width: '20%' }]}>₹{item.qty * item.price}</Text>
            </View>
          ))}
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalCell}>Total Price: ₹{order.totalPrice}</Text>
        </View>
      </View>
      <Text style={styles.footer}>This is a System Generated Bill</Text>
    </Page>
  </Document>
);

export default OrderPDF;
