
import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

type TabType = "dealer" | "farmer" | "intern" | "professional";

interface FormDataType {
  [key: string]: string | File | undefined;
}

export const JoinOurNetwork: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [activeTab, setActiveTab] = useState<TabType>("dealer");
  const [formData, setFormData] = useState<FormDataType>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === "file" ? files?.[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!form.current) throw new Error("Form reference is missing");

      // Validate farmer-specific fields
      if (activeTab === "farmer" && !formData.farmingType) {
        throw new Error("Please select a farming type (Fish or Shrimp).");
      }

      // Prepare template parameters
      const templateParams: any = {
        to_email: "nunna.chaitanyakumar@gmail.com",
        tab: activeTab,
        ...formData,
      };

      // Handle file field for intern and professional tabs only
      if (["intern", "professional"].includes(activeTab) && formData.document instanceof File) {
        templateParams.document = `A document (${formData.document.name}) was uploaded by ${formData.name || "user"}. Please contact ${formData.email || formData.phno || formData.mobile || "submitter"} to request the file.`;
      } else if (["intern", "professional"].includes(activeTab)) {
        templateParams.document = "No document uploaded";
      }

      // Map activeTab to template ID
      const templateIds: Record<TabType, string> = {
        dealer: "template_rybc1jm",
        farmer: "template_6eq35cq",
        intern: "your_actual_intern_template_id", // Replace with actual intern template ID
        professional: "your_actual_professional_template_id", // Replace with actual professional template ID
      };

      // Validate template ID
      if (templateIds[activeTab].startsWith("your_")) {
        throw new Error(`Invalid template ID for ${activeTab}. Please configure a valid EmailJS template ID in your dashboard.`);
      }

      // Send email using EmailJS sendForm
      const res = await emailjs.sendForm(
        "service_vjvp0xo",
        templateIds[activeTab],
        form.current,
        { publicKey: "K3IyCsHsVnuhIJNjN" }
      );

      if (res.status === 200) {
        const successMessage =
          ["intern", "professional"].includes(activeTab) && formData.document instanceof File
            ? "Form submitted successfully! Email sent. Note: The file was not attached; you may be contacted to share it."
            : "Form submitted successfully! Email sent.";
        setMessage({ type: "success", text: successMessage });
        setFormData({});
        form.current.reset();
      } else {
        throw new Error(`Failed to send email: Unexpected response status (${res.status})`);
      }
    } catch (err: any) {
      console.error("EmailJS Error:", {
        message: err.message,
        text: err.text,
        status: err.status,
        response: err.response,
      });
      setMessage({
        type: "error",
        text: err.message || "Failed to submit form. Please check your EmailJS configuration (Service ID, Template ID, Public Key) and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case "dealer":
        return (
          <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left">
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="shopname"
              placeholder="Shop Name"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-32"
            />
            {message && (
              <div
                className={`mt-4 text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {message.text}
              </div>
            )}
            <Button type="submit" disabled={loading} className="px-6 py-3">
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        );
      case "farmer":
        return (
          <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left">
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="phno"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-32"
            />
            <div className="flex gap-6">
              <label>
                <input type="radio" name="farmingType" value="Fish" onChange={handleChange} required /> Fish
              </label>
              <label>
                <input type="radio" name="farmingType" value="Shrimp" onChange={handleChange} required /> Shrimp
              </label>
            </div>
            <input
              name="landAcres"
              placeholder="Acres of Land"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            {message && (
              <div
                className={`mt-4 text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {message.text}
              </div>
            )}
            <Button type="submit" disabled={loading} className="px-6 py-3">
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        );
      case "intern":
        return (
          <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left">
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="phno"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="college"
              placeholder="College Name"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="department"
              placeholder="Department"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="document"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full border p-4 rounded h-14"
            />
            {message && (
              <div
                className={`mt-4 text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {message.text}
              </div>
            )}
            <Button type="submit" disabled={loading} className="px-6 py-3">
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        );
      case "professional":
        return (
          <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left">
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="organization"
              placeholder="Organization Name"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="experience"
              placeholder="Years of Experience"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="workExp"
              placeholder="Working Experience"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="currentOrg"
              placeholder="Currently Working / Organization Name"
              onChange={handleChange}
              className="w-full border p-4 rounded h-14"
            />
            <input
              name="document"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full border p-4 rounded h-14"
            />
            {message && (
              <div
                className={`mt-4 text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {message.text}
              </div>
            )}
            <Button type="submit" disabled={loading} className="px-6 py-3">
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 px-6">
      <h2
        className="text-primary mb-12 text-center"
        style={{ fontSize: "40px", fontWeight: 600 }}
      >
        Join Our Network
      </h2>

      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {(["dealer", "farmer", "intern", "professional"] as TabType[]).map(tab => (
          // <Button
          //   key={tab}
          //   onClick={() => setActiveTab(tab)}
          //   variant={activeTab === tab ? "default" : "outline"}
          //   style={{ minWidth: "120px", padding: "10px 80px", fontSize: "16px" }}
          //   className="px-6 py-3 rounded-lg"
          // >
          //   {tab === "dealer" && "Dealer"}
          //   {tab === "farmer" && "Farmer"}
          //   {tab === "intern" && "Intern"}
          //   {tab === "professional" && "Professional"}
          // </Button>
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-7 rounded-lg transition-all duration-300 ${activeTab === tab
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-white text-foreground hover:bg-primary/10 border-2 border-primary/20"
              }`}
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            {tab === "dealer" && "Dealer"}
            {tab === "farmer" && "Farmer"}
            {tab === "intern" && "Intern"}
            {tab === "professional" && "Professional"}
          </Button>
        ))}
      </div>

      <Card className="max-w-3xl mx-auto shadow-md">
        <CardContent className="p-8">{renderForm()}</CardContent>
      </Card>
    </section>
  );
};