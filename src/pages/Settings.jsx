import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Bell, Palette, Shield, LogOut } from 'lucide-react';
import Card from '../components/Card';
import ChartCard from '../components/ChartCard';
import Input from '../components/Input';
import Button from '../components/Button';
import useAuthStore from '../store/useAuthStore';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'theme', label: 'Theme', icon: Palette },
  { id: 'security', label: 'Security', icon: Shield },
];

function Toggle({ label, defaultChecked = true }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm">{label}</span>
      <button
        onClick={() => setOn((o) => !o)}
        className={`h-6 w-11 rounded-full transition ${on ? 'bg-accent' : 'bg-white/10'}`}
      >
        <span
          className={`block h-5 w-5 translate-y-0.5 rounded-full bg-white transition-transform ${
            on ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}

export default function Settings() {
  const [active, setActive] = useState('profile');
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
      <Card hover={false} className="h-fit lg:col-span-1">
        <nav className="flex flex-col gap-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                active === id ? 'bg-accent text-darktext' : 'text-light/80 hover:bg-white/10'
              }`}
            >
              <Icon size={18} /> {label}
            </button>
          ))}
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="mt-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-danger hover:bg-danger/10"
          >
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </Card>

      <div className="lg:col-span-3">
        {active === 'profile' && (
          <ChartCard title="Profile" subtitle="Your account details">
            <div className="flex flex-col gap-4 max-w-md">
              <Input label="Name" defaultValue={user?.name || 'Trader'} />
              <Input label="Email" defaultValue={user?.email || 'trader@riskwise.app'} />
              <Button className="w-fit">Save Changes</Button>
            </div>
          </ChartCard>
        )}
        {active === 'notifications' && (
          <ChartCard title="Notifications" subtitle="Choose what RiskWise alerts you about">
            <div className="divide-y divide-white/5">
              <Toggle label="Behavioral risk warnings" />
              <Toggle label="Weekly insight summary" />
              <Toggle label="Achievement unlocks" />
              <Toggle label="Market movement alerts" defaultChecked={false} />
            </div>
          </ChartCard>
        )}
        {active === 'theme' && (
          <ChartCard title="Theme" subtitle="Choose your preferred appearance">
            <div className="flex gap-4">
              {['Dark', 'Light'].map((t) => (
                <button
                  key={t}
                  className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10"
                >
                  {t}
                </button>
              ))}
            </div>
          </ChartCard>
        )}
        {active === 'security' && (
          <ChartCard title="Security" subtitle="Manage your password and sessions">
            <div className="flex flex-col gap-4 max-w-md">
              <Input label="Current Password" type="password" placeholder="••••••••" />
              <Input label="New Password" type="password" placeholder="••••••••" />
              <Button className="w-fit">Update Password</Button>
            </div>
          </ChartCard>
        )}
      </div>
    </div>
  );
}
