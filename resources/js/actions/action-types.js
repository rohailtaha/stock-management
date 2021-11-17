const actionTypes = {
  // Authentication Actions
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',

  // Users Actions
  SET_USER: 'SET_USER',
  RESET_USER: 'RESET_USER',
  UPDATE_USER: 'UPDATE_USER',
  SET_USERS: 'SET_USERS',
  CREATE_USER: 'CREATE_USER',
  DELETE_USER: 'DELETE_USER',
  SHOW_USERS_ERROR: 'SHOW_USERS_ERROR',
  HIDE_USERS_ERROR: 'HIDE_USERS_ERROR',

  // Products Actions
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  SET_SOME_PRODUCTS: 'SET_SOME_PRODUCTS',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  SHOW_PRODUCTS_ERROR: 'SHOW_PRODUCTS_ERROR',
  HIDE_PRODUCTS_ERROR: 'HIDE_PRODUCTS_ERROR',
  SET_PRODUCTS_SEARCH_FORM: 'SET_PRODUCTS_SEARCH_FORM',
  RESET_PRODUCTS_SEARCH_FORM: 'RESET_PRODUCTS_SEARCH_FORM',

  // Categories Actions
  SET_CATEGORIES: 'SET_CATEGORIES',
  CREATE_CATEGORY: 'CREATE_CATEGORY',
  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  SHOW_CATEGORY_ERROR: 'SHOW_CATEGORY_ERROR',
  HIDE_CATEGORY_ERROR: 'HIDE_CATEGORY_ERROR',

  // Suppliers Actions
  SET_SUPPLIERS: 'SET_SUPPLIERS',
  CREATE_SUPPLIER: 'CREATE_SUPPLIER',
  UPDATE_SUPPLIER: 'UPDATE_SUPPLIER',
  DELETE_SUPPLIER: 'DELETE_SUPPLIER',
  SHOW_SUPPLIER_ERROR: 'SHOW_SUPPLIER_ERROR',
  HIDE_SUPPLIER_ERROR: 'HIDE_SUPPLIER_ERROR',

  // Customers Actions
  SET_CUSTOMERS: 'SET_CUSTOMERS',
  CREATE_CUSTOMER: 'CREATE_CUSTOMER',
  UPDATE_CUSTOMER: 'UPDATE_CUSTOMER',
  DELETE_CUSTOMER: 'DELETE_CUSTOMER',
  SHOW_CUSTOMER_ERROR: 'SHOW_CUSTOMER_ERROR',
  HIDE_CUSTOMER_ERROR: 'HIDE_CUSTOMER_ERROR',

  // Purchases Actions
  SET_PURCHASES: 'SET_PURCHASES',
  CREATE_PURCHASE: 'CREATE_PURCHASE',
  UPDATE_PURCHASE: 'UPDATE_PURCHASE',
  DELETE_PURCHASE: 'DELETE_PURCHASE',
  SHOW_PURCHASE_ERROR: 'SHOW_PURCHASE_ERROR',
  HIDE_PURCHASE_ERROR: 'HIDE_PURCHASE_ERROR',
  SET_PRODUCTS_TO_PURCHASE: 'SET_PRODUCTS_TO_PURCHASE',
  ADD_PRODUCT_TO_PURCHASE: 'ADD_PRODUCT_TO_PURCHASE',
  DELETE_PRODUCT_FROM_PURCHASE: 'DELETE_PRODUCT_FROM_PURCHASE',
  CLEAR_PRODUCTS_FROM_PURCHASE: 'CLEAR_PRODUCTS_FROM_PURCHASE',
  SHOW_PRODUCTS_TO_PURCHASE_FORM_ERROR: 'SHOW_PRODUCTS_TO_PURCHASE_FORM_ERROR',
  SHOW_PRODUCTS_TO_PURCHASE_FORM_ERROR: 'SHOW_PRODUCTS_TO_PURCHASE_FORM_ERROR',
  HIDE_PRODUCTS_TO_PURCHASE_FORM_ERROR: 'HIDE_PRODUCTS_TO_PURCHASE_FORM_ERROR',
  SET_PURCHASES_REPORT: 'SET_PURCHASES_REPORT',

  // Sales Actions
  SET_SALES: 'SET_SALES',
  CREATE_SALE: 'CREATE_SALE',
  UPDATE_SALE: 'UPDATE_SALE',
  DELETE_SALE: 'DELETE_SALE',
  SHOW_SALE_ERROR: 'SHOW_SALE_ERROR',
  HIDE_SALE_ERROR: 'HIDE_SALE_ERROR',
  SET_PRODUCTS_TO_SALE: 'SET_PRODUCTS_TO_SALE',
  ADD_PRODUCT_TO_SALE: 'ADD_PRODUCT_TO_SALE',
  DELETE_PRODUCT_FROM_SALE: 'DELETE_PRODUCT_FROM_SALE',
  CLEAR_PRODUCTS_FROM_SALE: 'CLEAR_PRODUCTS_FROM_SALE',
  SHOW_PRODUCTS_TO_SALE_FORM_ERROR: 'SHOW_PRODUCTS_TO_SALE_FORM_ERROR',
  HIDE_PRODUCTS_TO_SALE_FORM_ERROR: 'HIDE_PRODUCTS_TO_SALE_FORM_ERROR',
  SET_SALES_REPORT: 'SET_SALES_REPORT',

  SHOW_SUCCESS_MESSAGE: 'SHOW_SUCCESS_MESSAGE',
  HIDE_SUCCESS_MESSAGE: 'HIDE_SUCCESS_MESSAGE',
  SHOW_ERROR: 'SHOW_ERROR',
  HIDE_ERROR: 'HIDE_ERROR',

  SHOW_DELETE_CONFIRMATION: 'SHOW_DELETE_CONFIRMATION',
  HIDE_DELETE_CONFIRMATION: 'HIDE_DELETE_CONFIRMATION',
  CONFIRM_DELETE: 'CONFIRM_DELETE',
  RESET_DELETE_CONFIRMATION: 'RESET_DELETE_CONFIRMATION',

  LOAD: 'LOAD',
  STOP_LOADING: 'STOP_LOADING',

  // Pagination Actions
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  RESET_PAGINATION: 'RESET_PAGINATION',
};

export default actionTypes;
