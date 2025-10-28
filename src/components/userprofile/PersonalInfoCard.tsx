import { Card, CardContent } from "@/components/ui/card";
import { Edit } from "lucide-react";

interface PersonalInfoCardProps {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const PersonalInfoCard = ({
  name,
  email,
  address,
  phone,
}: PersonalInfoCardProps) => {
  return (
    <Card className="bg-white mb-8">
      <CardContent className="p-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[24px] font-medium">Personal Information</h3>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-[16px] text-[#797979] mb-1">Full Name</p>
              <p className="text-[16px]">{name}</p>
            </div>
            <div>
              <p className="text-[16px] text-[#797979] mb-1">Email Address</p>
              <p className="text-[16px]">{email}</p>
            </div>
            <div>
              <p className="text-[16px] text-[#797979] mb-1">Address</p>
              <p className="text-[16px]">{address}</p>
            </div>
            <div>
              <p className="text-[16px] text-[#797979] mb-1">Phone Number</p>
              <p className="text-[16px]">{phone}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoCard;
