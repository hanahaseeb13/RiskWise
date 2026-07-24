import { AlertTriangle } from 'lucide-react';
import Modal from './Modal';
import Button from './Button';
import useUIStore from '../store/useUIStore';
import { useNavigate } from 'react-router-dom';

export default function InterventionModal() {
  const { interventionOpen, closeIntervention } = useUIStore();
  const navigate = useNavigate();

  return (
    <Modal open={interventionOpen} onClose={closeIntervention}>
      <div className="flex flex-col gap-4 pt-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-orange/20 px-3 py-1 text-xs font-semibold text-orange">
          <AlertTriangle size={14} /> Gentle Warning
        </span>
        <h3 className="font-display text-2xl font-bold">This trade looks a little rushed.</h3>
        <p className="text-sm text-muted">
          You've placed several large buy orders in a short window — a pattern often linked to
          FOMO-driven decisions. Consider reviewing your recent behavior before confirming your
          next move. This is intervention level 2 of 4.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={closeIntervention}>
            Acknowledge
          </Button>
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => {
              closeIntervention();
              navigate('/insights');
            }}
          >
            View Insight
          </Button>
        </div>
      </div>
    </Modal>
  );
}
