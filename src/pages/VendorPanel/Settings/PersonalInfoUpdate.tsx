import {
  useGetProfileQuery,
  useUpdateUsersMutation,
} from "@/store/Api/UserApi/UserApi";
import React, { useState, useEffect } from "react";

// Define full profile shape including new fields
interface UserProfileData {
  name: string;
  phone: string;
  email: string;
  country: string;
  language: string;
  businessName: string;
  businessType: string;
  businessDescription: string;
  // New fields
  storeBanner?: string; // URL or base64
  currency: string;
  shippingRegion: string;
  shippingLocation: string;
  holdingTime: string;
  storeDescription: string;
  productCategories: string[];
  paymentMethods: {
    type: string;
    last4: string;
    expiry: string;
    isDefault: boolean;
  }[];
  taxId: string;
}

// Your API response shape
interface ProfileResponse {
  success: boolean;
  data: UserProfileData;
}

const PersonalProfileInfoUpdate: React.FC = () => {
  const { data: profile, isLoading, isError } = useGetProfileQuery(undefined);
  const [updateProfile, { isLoading: isUpdating, isSuccess, error }] =
    useUpdateUsersMutation();

  // Initialize form with empty values
  const [formValues, setFormValues] = useState<UserProfileData>({
    name: "",
    phone: "",
    email: "",
    country: "",
    language: "",
    businessName: "",
    businessType: "",
    businessDescription: "",
    storeBanner: "",
    currency: "USD",
    shippingRegion: "United states",
    shippingLocation: "Local within city state",
    holdingTime: "3",
    storeDescription: "",
    productCategories: [],
    paymentMethods: [
      { type: "visa", last4: "2241", expiry: "05/2027", isDefault: true },
      { type: "mastercard", last4: "1234", expiry: "08/2026", isDefault: false },
      { type: "paypal", last4: "0026", expiry: "06/2026", isDefault: false },
    ],
    taxId: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize form when profile loads
  useEffect(() => {
    if (profile?.success && profile.data) {
      const {
        name,
        phone,
        email,
        country,
        language,
        businessName,
        businessType,
        businessDescription,
        storeBanner = "",
        currency = "USD",
        shippingRegion = "United states",
        shippingLocation = "Local within city state",
        holdingTime = "3",
        storeDescription = "",
        productCategories = [],
        paymentMethods = [],
        taxId = "",
      } = profile.data;

      setFormValues({
        name: name || "",
        phone: phone || "",
        email: email || "",
        country: country || "",
        language: language || "",
        businessName: businessName || "",
        businessType: businessType || "",
        businessDescription: businessDescription || "",
        storeBanner,
        currency,
        shippingRegion,
        shippingLocation,
        holdingTime,
        storeDescription,
        productCategories,
        paymentMethods,
        taxId,
      });
    }
  }, [profile]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (category: string) => {
    setFormValues((prev) => {
      const updated = prev.productCategories.includes(category)
        ? prev.productCategories.filter((c) => c !== category)
        : [...prev.productCategories, category];
      return { ...prev, productCategories: updated };
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Personal Info Validation
    if (!formValues.name.trim()) newErrors.name = "Name is required";
    if (!formValues.phone.trim()) newErrors.phone = "Phone is required";
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formValues.country) newErrors.country = "Country is required";
    if (!formValues.language) newErrors.language = "Language is required";

    // Business Info Validation
    if (!formValues.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formValues.businessType.trim()) newErrors.businessType = "Business type is required";
    if (!formValues.businessDescription.trim()) newErrors.businessDescription = "Business description is required";

    // Currency & Shipping Validation
    if (!formValues.currency) newErrors.currency = "Currency is required";
    if (!formValues.shippingRegion) newErrors.shippingRegion = "Shipping region is required";
    if (!formValues.shippingLocation) newErrors.shippingLocation = "Shipping location is required";
    if (!formValues.holdingTime) newErrors.holdingTime = "Holding time is required";
    if (!formValues.storeDescription.trim()) newErrors.storeDescription = "Store description is required";

    // Tax ID Validation
    if (!formValues.taxId.trim()) newErrors.taxId = "Tax ID is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    updateProfile({
      name: formValues.name,
      phone: formValues.phone,
      email: formValues.email,
      country: formValues.country,
      language: formValues.language,
      businessName: formValues.businessName,
      businessType: formValues.businessType,
      businessDescription: formValues.businessDescription,
      storeBanner: formValues.storeBanner,
      currency: formValues.currency,
      shippingRegion: formValues.shippingRegion,
      shippingLocation: formValues.shippingLocation,
      holdingTime: formValues.holdingTime,
      storeDescription: formValues.storeDescription,
      productCategories: formValues.productCategories,
      paymentMethods: formValues.paymentMethods,
      taxId: formValues.taxId,
    });
  };

  if (isLoading) return <div>Loading profile...</div>;
  if (isError) return <div>Error loading profile.</div>;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          padding: "30px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        {/* ===== SUCCESS / ERROR ALERTS ===== */}
        {isSuccess && (
          <div
            style={{
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              borderLeft: "4px solid #155724",
            }}
          >
            🎉 Profile updated successfully!
          </div>
        )}

        {(error as any)?.data?.message && (
          <div
            style={{
              backgroundColor: "#f8d7da",
              color: "#721c24",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              borderLeft: "4px solid #721c24",
            }}
          >
            ❌ {(error as any).data.message || "Update failed"}
          </div>
        )}

        {/* ===== PERSONAL INFORMATION SECTION ===== */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#333",
            borderBottom: "2px solid #007bff",
            paddingBottom: "8px",
          }}
        >
          Basic Information
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              border: errors.name ? "1px solid #dc3545" : "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fafafa",
              fontSize: "1rem",
              transition: "border 0.2s",
            }}
          />
          {errors.name && (
            <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
              {errors.name}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.phone ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            />
            {errors.phone && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.phone}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.email ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            />
            {errors.email && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Country
            </label>
            <select
              name="country"
              value={formValues.country}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.country ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            >
              <option value="">Select Country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {errors.country && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.country}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Language
            </label>
            <select
              name="language"
              value={formValues.language}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.language ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
            {errors.language && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.language}
              </div>
            )}
          </div>
        </div>

        {/* ===== BUSINESS INFORMATION SECTION ===== */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#333",
            borderBottom: "2px solid #28a745",
            paddingBottom: "8px",
          }}
        >
          Business Information
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Business name
          </label>
          <input
            type="text"
            name="businessName"
            value={formValues.businessName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              border: errors.businessName ? "1px solid #dc3545" : "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fafafa",
              fontSize: "1rem",
            }}
          />
          {errors.businessName && (
            <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
              {errors.businessName}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Business type
            </label>
            <input
              type="text"
              name="businessType"
              value={formValues.businessType}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.businessType ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            />
            {errors.businessType && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.businessType}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Country
            </label>
            <select
              name="country"
              value={formValues.country}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.country ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            >
              <option value="">Select Country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {errors.country && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.country}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Business Description
          </label>
          <textarea
            name="businessDescription"
            value={formValues.businessDescription}
            onChange={handleChange}
            rows={3}
            style={{
              width: "100%",
              padding: "12px",
              border: errors.businessDescription ? "1px solid #dc3545" : "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fafafa",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
          {errors.businessDescription && (
            <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
              {errors.businessDescription}
            </div>
          )}
        </div>

        {/* ===== UPLOAD STORE BANNER SECTION ===== */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#333",
            borderBottom: "2px solid #ffc107",
            paddingBottom: "8px",
          }}
        >
          Upload your store banner
        </h2>

        <div
          style={{
            border: "2px dashed #ddd",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "30px",
            backgroundColor: "#fafafa",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>☁️</div>
          <p style={{ color: "#666", marginBottom: "10px" }}>
            Upload an image or drag & drop PNG, JPG, up to 10 MB (1600 x 1200 recommended)
          </p>
          <input
            type="file"
            accept="image/*"
            style={{
              display: "block",
              margin: "10px auto",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "0.875rem",
            }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormValues((prev) => ({ ...prev, storeBanner: reader.result as string }));
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          {formValues.storeBanner && (
            <div style={{ marginTop: "10px" }}>
              <img
                src={formValues.storeBanner}
                alt="Store Banner Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100px",
                  objectFit: "contain",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
          )}
        </div>

        {/* ===== CURRENCY & SHIPPING SECTION ===== */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#333",
            borderBottom: "2px solid #17a2b8",
            paddingBottom: "8px",
          }}
        >
          Currency and shipping information
        </h2>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Currency
            </label>
            <select
              name="currency"
              value={formValues.currency}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.currency ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="NGN">NGN</option>
            </select>
            {errors.currency && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.currency}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Shipping Regions
            </label>
            <select
              name="shippingRegion"
              value={formValues.shippingRegion}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.shippingRegion ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            >
              <option value="United states">United States</option>
              <option value="Canada">Canada</option>
              <option value="Europe">Europe</option>
            </select>
            {errors.shippingRegion && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.shippingRegion}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Shipping Location
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Local within city state", "National within country", "International"].map((loc) => (
                <label key={loc} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <input
                    type="radio"
                    name="shippingLocation"
                    value={loc}
                    checked={formValues.shippingLocation === loc}
                    onChange={handleChange}
                    style={{ accentColor: "#007bff" }}
                  />
                  {loc}
                </label>
              ))}
            </div>
            {errors.shippingLocation && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.shippingLocation}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              Holding time (days)
            </label>
            <select
              name="holdingTime"
              value={formValues.holdingTime}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.holdingTime ? "1px solid #dc3545" : "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                fontSize: "1rem",
              }}
            >
              <option value="1">1 day</option>
              <option value="2">2 days</option>
              <option value="3">3 days</option>
              <option value="5">5 days</option>
              <option value="7">7 days</option>
            </select>
            {errors.holdingTime && (
              <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
                {errors.holdingTime}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Store description
          </label>
          <textarea
            name="storeDescription"
            value={formValues.storeDescription}
            onChange={handleChange}
            rows={4}
            style={{
              width: "100%",
              padding: "12px",
              border: errors.storeDescription ? "1px solid #dc3545" : "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fafafa",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
          {errors.storeDescription && (
            <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
              {errors.storeDescription}
            </div>
          )}
        </div>

        {/* ===== PRODUCT CATEGORIES SECTION ===== */}
        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Product Categories
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            {[
              "Analgesic",
              "Antibiotics",
              "Cardiovascular medications",
              "Antidiabetic Medications",
              "Central nervous system",
              "All",
            ].map((category) => (
              <label
                key={category}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  backgroundColor: formValues.productCategories.includes(category)
                    ? "#e3f2fd"
                    : "#fafafa",
                  border: `1px solid ${formValues.productCategories.includes(category) ? "#2196f3" : "#ddd"}`,
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onClick={() => handleCheckboxChange(category)}
              >
                <input
                  type="checkbox"
                  checked={formValues.productCategories.includes(category)}
                  onChange={() => {}}
                  style={{ accentColor: "#2196f3" }}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* ===== PAYMENT METHODS SECTION ===== */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#333",
            borderBottom: "2px solid #6f42c1",
            paddingBottom: "8px",
          }}
        >
          Payment method
        </h2>

        <div style={{ display: "grid", gap: "15px", marginBottom: "30px" }}>
          {formValues.paymentMethods.map((method, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                border: "1px solid #ddd",
                transition: "box-shadow 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "20px",
                    backgroundColor: method.type === "visa" ? "#005cbf" :
                                 method.type === "mastercard" ? "#ff5f00" :
                                 "#003087",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "0.75rem",
                  }}
                >
                  {method.type === "visa" ? "V" : method.type === "mastercard" ? "M" : "P"}
                </div>
                <div>
                  <div style={{ fontWeight: "500" }}>
                    {method.type === "visa" ? "Visa" :
                     method.type === "mastercard" ? "Mastercard" : "PayPal"} card in {method.last4}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#666" }}>
                    Expires {method.expiry}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#eee",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.75rem",
                  }}
                >
                  🖋️
                </button>
                <button
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#eee",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.75rem",
                  }}
                >
                  🗑️
                </button>
                {method.isDefault ? (
                  <span
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#28a745",
                      color: "white",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                    }}
                  >
                    Default
                  </span>
                ) : (
                  <button
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.75rem",
                    }}
                    onClick={() => {
                      const updated = formValues.paymentMethods.map((m, i) =>
                        i === index ? { ...m, isDefault: true } : { ...m, isDefault: false }
                      );
                      setFormValues((prev) => ({ ...prev, paymentMethods: updated }));
                    }}
                  >
                    Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px",
              backgroundColor: "#fafafa",
              borderRadius: "8px",
              border: "1px solid #ddd",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onClick={() => {
              alert("Add new payment method functionality would go here");
            }}
          >
            <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>+</span>
            Add new payment method (Credit card, Bank account or PayPal)
          </div>
        </div>

        {/* ===== TAX ID SECTION ===== */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#333",
            borderBottom: "2px solid #dc3545",
            paddingBottom: "8px",
          }}
        >
          Tax ID
        </h2>

        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Tax ID / Business registration number
          </label>
          <input
            type="text"
            name="taxId"
            value={formValues.taxId}
            onChange={handleChange}
            placeholder="Enter your tax ID or business registration number"
            style={{
              width: "100%",
              padding: "12px",
              border: errors.taxId ? "1px solid #dc3545" : "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fafafa",
              fontSize: "1rem",
            }}
          />
          {errors.taxId && (
            <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "4px" }}>
              {errors.taxId}
            </div>
          )}
        </div>

        {/* ===== SAVE BUTTON ===== */}
        <button
          type="submit"
          disabled={isUpdating}
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: isUpdating ? "#6c757d" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: isUpdating ? "not-allowed" : "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            transition: "background-color 0.2s",
          }}
        >
          {isUpdating ? "Saving changes..." : "Save changes"}
        </button>
      </div>
    </div>
  );
};

export default PersonalProfileInfoUpdate;