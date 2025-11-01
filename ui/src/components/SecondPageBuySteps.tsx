import { useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Steps from "./Steps";
import { StepComponentProps } from "./FirstPageBuySteps";

const SecondStep = ({ step, next }: StepComponentProps) => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    address: "",
    note: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Нэр оруулна уу";
    if (!formData.lastName.trim()) newErrors.lastName = "Овoг оруулна уу";
    if (!formData.phone.trim()) newErrors.phone = "Утасны дугаар оруулна уу";
    else if (!/^\d{8}$/.test(formData.phone))
      newErrors.phone = "8 оронтой зөв утасны дугаар оруулна уу";
    if (!formData.address.trim()) newErrors.address = "Хаяг оруулна уу";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    next();
  };

  return (
    <div className="flex justify-center items-center bg-zinc-200 py-4 px-4 min-h-screen">
      <div className="flex flex-col items-center w-full max-w-[1300px]">
        <Steps step={step} />

        <div className="flex flex-col md:flex-row gap-4 mt-4 w-full justify-center">
          {/* Зүүн талд — хүргэлтийн мэдээлэл */}

          <DeliveryInfo />

          {/* Баруун талд — форм */}
          <div className="relative bg-white w-full md:w-[680px] rounded-2xl p-11 shadow-md">
            <p className="font-bold text-lg mb-4">
              2. Хүргэлтийн мэдээлэл оруулах
            </p>

            <div className="flex flex-col gap-2">
              {/* Нэр ба овог нэг мөрөнд */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="font-semibold mb-1">Овог:</p>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`border rounded-2xl w-full px-4 py-2 focus:outline-none focus:ring-2 ${
                      errors.lastName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <p className="font-semibold mb-1">Нэр:</p>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`border rounded-2xl w-full px-4 py-2 focus:outline-none focus:ring-2 ${
                      errors.firstName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
              </div>

              {/* Утасны дугаар */}
              <div>
                <p className="font-semibold mb-1">Утасны дугаар:</p>
                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`border rounded-2xl w-full px-4 py-2 focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Хаяг */}
              <div>
                <p className="font-semibold mb-1">Хаяг:</p>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`border rounded-2xl w-full px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 ${
                    errors.address
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* Нэмэлт мэдээлэл */}
              <div>
                <p className="font-semibold mb-1">Нэмэлт мэдээлэл:</p>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-2xl w-full px-4 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-gray-500 text-sm mt-1">
                  Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
                </p>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="absolute bottom-6 right-8 bg-blue-700 text-white font-semibold rounded-2xl px-8 py-2 hover:bg-blue-600 transition"
            >
              Төлбөр төлөх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
