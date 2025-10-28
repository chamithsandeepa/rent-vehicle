import { Badge } from "@/components/ui/badge";

interface ProfileHeaderProps {
  name: string;
  email: string;
  status: string;
  avatar: string;
}

const ProfileHeader = ({ name, email, status, avatar }: ProfileHeaderProps) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <div className="mb-2">
          <Badge className="bg-green-200 text-[#24A600] border-2 border-green-400 px-3 py-1 text-[12px]">
            {status}
          </Badge>
        </div>
        <h2 className="text-[24px] font-semibold">{name}</h2>
        <p className="text-[12px] text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
